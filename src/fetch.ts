type RandomUserResponse = {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    email: string;
  }>;
};
// Note: When an array is unknown in typeScript, we use unknown[]
/* 
    type ApiResponse = {
        results: unknown[];
    };
*/

const fetchRandomUser = async (): Promise<void> => {
    const apiUrl = "https://randomuser.me/api/";
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching random user data: , ${response}.status`);
        }

        const data: RandomUserResponse = await response.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}
fetchRandomUser();