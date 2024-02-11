function autoFillForm(e) {
    var timestamp = e.values[0];
    var lastName = e.values[1];
    var firstName = e.values[2];
    var age = e.values[3];
    var sex = e.values[4];
    var contactNumber = e.values[5];
    var address = e.values[6];
    var takeCourseBefore = e.values[7];
    var courseBefore = e.values[8];
    var courseNow = e.values[9];
  
    var FORM_DOCS_ID = "";
    var RESPONSES_FOLDER_ID = "";

    // This formDocs is the file ID of the swimming form template
    var formDocs = DriveApp.getFileById(FORM_DOCS_ID);
    var responsesFolder = DriveApp.getFolderById(RESPONSES_FOLDER_ID);
  
    var populatedFile = formDocs.makeCopy(firstName + ' ' + lastName, responsesFolder);
  
    var doc = DocumentApp.openById(populatedFile.getId());
  
    var body = doc.getBody();
  
    // Replace the text in the document with the corresponding inputted information
    body.replaceText("{{Year}}", timestamp.slice(5,9));
    body.replaceText("{{Date}}", timestamp.slice(0, 9));
    body.replaceText("{{FirstName}}", firstName);
    body.replaceText("{{LastName}}", lastName);
    body.replaceText("{{Age}}", age);
    body.replaceText("{{Sex}}", sex);
    body.replaceText("{{ContactNumber}}", contactNumber);
    body.replaceText("{{Address}}", address);
    body.replaceText("{{LessonBefore}}", takeCourseBefore);
    body.replaceText("{{CourseBefore}}", courseBefore);
    body.replaceText("{{CourseNow}} ", courseNow);
  
    doc.saveAndClose();
  }
  