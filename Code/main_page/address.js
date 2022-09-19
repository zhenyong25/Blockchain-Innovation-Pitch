// Fetch public address upon login 

// window.userWalletAddress = null  
// const userWallet = document.getElementById('userWallet')
// userWallet.addEventListener('DOMContentLoaded', () => {
//     public_address()})

// async function public_address() {
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
//     .catch((e) => {
//         console.error(e.message)
//         return
//     })
//     if (!accounts) { return }

//     window.userWalletAddress = accounts[0]
//     userWallet.innerText = window.userWalletAddress
// }

// (Source: https://www.youtube.com/watch?v=19kZiv9AhNs)
window.userAddress = null;
window.onload = async () => {
    // Init Web3 connected to ETH network
    if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    } else {
    alert("No ETH brower extension detected.");
    }

    // Load in Localstore key
    window.userAddress = window.localStorage.getItem("userAddress");
    showAddress();
};

// Use this function to turn a 42 character ETH address
// into an address like 0x345...12345
function truncateAddress(address) {
    if (!address) {
    return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
    address.length - 5,
    address.length
    )}`;
}

// Display or remove the users know address on the frontend
function showAddress() {
    if (!window.userAddress) {
    document.getElementById("userAddress").innerText = "";
    document.getElementById("logoutButton").classList.add("hidden");
    return false;
    }

    document.getElementById(
    "userAddress"
    ).innerText = `ETH Address: ${truncateAddress(window.userAddress)}`;
    document.getElementById("logoutButton").classList.remove("hidden");
}
