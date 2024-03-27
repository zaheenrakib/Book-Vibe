const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exits = storedJobApplications.find(jobId => jobId === id);
    if (!exits) {
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }
}

export { getStoredJobApplication, saveJobApplication }