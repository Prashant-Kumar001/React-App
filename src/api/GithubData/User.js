export const getUserData = async () => {
    const response = await fetch("https://api.github.com/users/PrashantKumar0010");
    const userData = await response.json(); // This parses the response body to JSON
    return userData;
};
