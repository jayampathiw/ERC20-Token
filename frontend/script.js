const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;

const tokenAbi = [
  "function balanceOf(address account) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
];
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
let tokenContract = null;

const dexAbi = [
  "function getPrice(uint256 numTokens) view returns (uint256)",
  "function getTokenBalance() view returns (uint256)",
  "function buy(uint256 numTokens) payable",
  "function sell()",
];
const dexAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
let dexContract = null;

async function getAccess() {
  if (tokenContract) return;
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);
  dexContract = new ethers.Contract(dexAddress, dexAbi, signer);
}

async function getPrice() {
  await getAccess();
  const price = await dexContract.getPrice(1);
  document.getElementById("tokenPrice").innerHTML =
    ethers.utils.formatEther(price) + " ETH";
}

async function getTokenBalance() {
  await getAccess();
  const balance = await tokenContract.balanceOf(await signer.getAddress());
  document.getElementById("tokensBalance").innerHTML = balance.toString();
}

async function getAvailableTokens() {
  await getAccess();
  const tokens = await dexContract.getTokenBalance();
  document.getElementById("tokensAvailable").innerHTML = tokens.toString();
}

async function grantAccess() {
  await getAccess();
  const value = document.getElementById("tokenGrant").value;
  try {
    await tokenContract.approve(dexAddress, ethers.utils.parseEther(value));
    alert("Access granted successfully!");
  } catch (error) {
    alert("Error: " + error.message);
  }
}

async function sell() {
  await getAccess();
  try {
    await dexContract.sell();
    alert("Tokens sold successfully!");
    await getTokenBalance();
    await getAvailableTokens();
  } catch (error) {
    alert("Error: " + error.message);
  }
}

async function buy() {
  await getAccess();
  const tokenAmount = document.getElementById("tokensToBuy").value;
  try {
    const price = await dexContract.getPrice(tokenAmount);
    await dexContract.buy(tokenAmount, { value: price });
    alert("Tokens bought successfully!");
    await getTokenBalance();
    await getAvailableTokens();
  } catch (error) {
    alert("Error: " + error.message);
  }
}

// Navigation functionality
function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(e.target.getAttribute("data-page"));
  });
});

// Initial load of data
window.addEventListener("load", async () => {
  showPage("dashboard");
  await getPrice();
  await getTokenBalance();
  await getAvailableTokens();
});