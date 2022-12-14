// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = "![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)";
  } else if (license === "Apache") {
    badge =
      "![Apache 2.0 license](https://img.shields.io/badge/license-Apache-blue.svg)";
  } else if (license === "Mozilla") {
    badge =
      "![Mozilla license](https://img.shields.io/badge/license-Mozilla-blue.svg)";
  } else if (license === "None") {
    badge = "";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "Apache") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    licenseLink = "(https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "None") {
    licenseLink = "";
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
https://github.com/${data.Github}/${data.Title}

## License
${renderLicenseSection(data.license)} ${renderLicenseBadge(
    data.license
  )} ${renderLicenseLink(data.license)}

## Table of Contents
### * [License](#license)
### * [Description](#description)
### * [Installation](#installation)
### * [Usage](#usage)
### * [Questions](#questions)
### * [Contributing](#contributing)

## Description
${data.Description}

## Installation
The following necessary dependencies must be installed to run the application properly: ${
    data.Installation
  }

## Usage
${data.Usage}

## Questions
If you have any questions about the repo, open an issue at https://github.com/${
    data.Github
  }?tab=repositories or contact me directly ${data.Email}.

## Contributing
Contributors: ${data.Collaborators}`;
}

module.exports = generateMarkdown;
