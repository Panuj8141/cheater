// Data for the dropdown options and corresponding document links
const practicals = [
    {
        keywords: "Reverse number, Sum of digits, Largest and smallest in array",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals1.docx"
    },
    {
        keywords: "Circle area perimeter, Multiplication table, Binary addition",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals2.docx"
    },
    {
        keywords: "Count letters, spaces, digits, Constructor destructor, Ascending descending order",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals3.docx"
    },
    {
        keywords: "Abstract class, Single inheritance, Interface annotations, Method overriding",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals4.docx"
    },
    {
        keywords: "Armstrong number, Multiple inheritance, Matrix addition, Matrix multiplication",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals5.docx"
    },
    {
        keywords: "Private access modifier, Public access modifier",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals6.docx"
    },
    {
        keywords: "Thread life cycle, Vector implementation",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals7.docx"
    },
    {
        keywords: "Single inheritance, Multilevel inheritance, Exception handling",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals8.docx"
    },
    {
        keywords: "Multiple inheritance, This and super keywords",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals9.docx"
    },
    {
        keywords: "Final variable, Final method, Final class",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals10.docx"
    },
    {
        keywords: "File reading, File copy",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals11.docx"
    },
    {
        keywords: "User-defined exception, Armstrong number with exception, File handling student data",
        docLink: "https://panuj8141.github.io/cheater/docs/Practicals12.docx"
    }
];

// Populate the dropdown with practicals
const selectElement = document.getElementById('practical-select');

practicals.forEach((practical, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `Practical ${index + 1}: ${practical.keywords}`;
    selectElement.appendChild(option);
});

// Event listener for selection change
selectElement.addEventListener('change', function() {
    const selectedIndex = this.value;
    const downloadDiv = document.getElementById('download-link');
    downloadDiv.innerHTML = '';  // Clear any previous links

    if (selectedIndex !== '') {
        const practical = practicals[selectedIndex];
        const link = document.createElement('a');
        link.href = practical.docLink;
        link.textContent = 'Download Document';
        link.className = 'download-button';
        link.target = '_blank';  // Opens link in a new tab
        downloadDiv.appendChild(link);
    }
});
