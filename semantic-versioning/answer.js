retrieveMajor = semver => semver.split('.')[0];

retrieveMinor = semver => semver.split('.')[1];

retrievePatch = semver => semver.split('.')[2];

const semver = "6.1.9";

document.getElementById('ans').textContent = retrieveMajor(semver); 
document.getElementById('ans1').textContent = retrieveMinor(semver); 
document.getElementById('ans2').textContent = retrievePatch(semver); 