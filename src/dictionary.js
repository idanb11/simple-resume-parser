const sectionsDictionary = [
  {
    name: 'contact-info',
    pattern: /([^\n]+)/,
    template: ({ 'contact-info': contactInfo }) => ({
      'contact-info': {
        name: contactInfo,
      },
    }),
  },
  {
    name: 'employment-history',
    pattern: /EMPLOYMENT HISTORY([\s\S]+?)(?:\n\n[A-Z ]|$)/,
    template: ({ 'employment-history': employmentHistory }) => ({
      experience: employmentHistory
        .trim()
        .split(/\n[\s]\n/)
        .map((experienceStr) => {
          const lines = experienceStr.split('\n');
          const title = lines[0];
          const company = lines[1].match(/^(.*?) [–|-]/)[1];
          const dates = lines[1].match(/(\w+ \d{4}) to (Present|\w+ \d{4})/);
          const startDate = dates[1];
          const endDate = dates[2];
          const description = lines.slice(2).join(' ');

          return {
            'start-date': startDate,
            'end-date': endDate,
            title: title,
            description: description,
            company: company,
          };
        }),
    }),
  },
  // Add more sections here if needed
  // {
  //   name: 'education',
  //   pattern: /EDUCATION([\s\S]*?)(?:\n\n|$)/,
  //   template: ({education}) => ({
  //     education: education.split(/\n[\s]\n/)[0],
  //   }),
  // },
];

module.exports = sectionsDictionary;
