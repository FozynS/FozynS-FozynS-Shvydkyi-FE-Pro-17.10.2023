/**
Надо сделать так чтобы появлялись по порядку???
*/
const jobs = [
    {id: "job1", executionTime: 1000, output: "job1_output"},
    {id: "job2", executionTime: 500, output: "job2_output"},
    {id: "job3", executionTime: 800, output: "job3_output"}
];

const executeJobs = function(jobs, index = 0) {
    if(index < jobs.length) {
        const job = jobs[index];
        setTimeout(() => {
            console.log("Job executed", job.output);
            executeJobs(jobs, index + 1);
        }, jobs.executionTime);
    }
}

executeJobs(jobs);