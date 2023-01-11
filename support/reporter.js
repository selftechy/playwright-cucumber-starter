const reporter = require('cucumber-html-reporter');
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const rimraf = require("rimraf");
const cucumberJunitConvert = require('cucumber-junit-convert');

const htmlReports = path.join(process.cwd(), "/reports/html");
const xmlReports = path.join(process.cwd(), "/reports/xml");
const targetJson = "./reports/cucumber.json";
const outputHtml = htmlReports + "/cucumber_report.html";
const outputXml = xmlReports + "/cucumber_report.xml";

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: outputHtml,
    theme: "bootstrap",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false
  };
  
  const xmlOptions = {
    inputJsonFile: targetJson,
    outputXmlFile: outputXml
  }
  
var options = {
        theme: 'bootstrap',
        jsonFile: './reports/cucumber_report.json',
        output: '/reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
    };

    

    class ReportGenerator{
        
        async createReport(){
            reporter.generate(cucumberReporterOptions);
        }


        async removeDirectory(dirPath){
            if (fs.existsSync(dirPath)) {
              rimraf.sync(dirPath);
            }
          }
        
          async createDirectory(dir) {
            if (!fs.existsSync(dir)) {
              mkdirp.sync(dir);
            }
          }
        
          async createHTMLReport() {
            return new Promise((resolve, reject) => {
              try {
                reporter.generate(cucumberReporterOptions);
                resolve(true);
              } catch (err) {
                if (err) {
                  reject(err);
                }
              }
            });
          }

          async generatXmlReport(){
            try {
              cucumberJunitConvert.convert(xmlOptions);
            } catch (err) {
                console.log(err);
            }
          }
        
        
    }
    module.exports = {ReportGenerator};



    