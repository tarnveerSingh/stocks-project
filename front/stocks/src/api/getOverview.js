export const fetchCompanyOverview = async (symbol) => {
    try {
        // Fetch data from your backend
        const response = await fetch(`http://localhost:3000/api/company/overview/${symbol}`);
        const data = await response.json();
        // console.log('Response from server:', data);
        return data;
    } catch (error) {
        console.error('Error fetching company overview:', error);
    }
};