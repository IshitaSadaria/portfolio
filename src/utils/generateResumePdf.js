import jsPDF from 'jspdf';

const generateResumePdf = (data) => {
  const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF document with A4 size
  const resumeContent = ''; // Initialize the resume content string

  // Loop through the data and add the content to the resume string
  Object.keys(data).forEach((key) => {
    if (key === 'header') {
      resumeContent += `${data[key].name}\n`;
      resumeContent += `${data[key].role}\n\n`;
    } else if (key === 'experience') {
      resumeContent += 'Experience:\n';
      data[key].forEach((exp) => {
        resumeContent += `${exp.name}\n`;
        resumeContent += `${exp.description}\n\n`;
      });
    } else if (key === 'education') {
      resumeContent += 'Education:\n';
      data[key].forEach((edu) => {
        resumeContent += `${edu.school}\n`;
        resumeContent += `${edu.degree}\n\n`;
      });
    }
  });

  // Add the resume content to the PDF document
  pdf.text(resumeContent, 10, 10);

  // Save the PDF file to the user's device
  pdf.save('resume.pdf');
};

export default generateResumePdf;