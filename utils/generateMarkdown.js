// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license !== "None") {
    badge = `![License: ${license}](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }

  badge = "";

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "Apache") {
    // just need the img.shields part, next https is the actual link so it can go in next function
    licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  }

  if (license === "MIT") {
    licenseLink = `https://opensource.org/licenses/MIT`;
  }

  if (license === "Mozilla") {
    licenseLink = `https://opensource.org/licenses/MPL-2.0`;
  }

  licenseLink = "";

  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== "None") {
    licenseSection = `License: ${license}`;
  }

  licenseSection = "";

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
https://github.com/${data.Github}/${data.Title}

## Description
${data.Description}

## Installation
The following necessary dependencies must be installed to run the application properly: ${
    data.Installation
  }

## Usage
${data.Usage}

## Contributing
Contributors: ${data.Collaborators}

## License
${renderLicenseSection(data.license)} ${renderLicenseBadge(
    data.license
  )} ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
