import { faker } from "@faker-js/faker";

// Function to generate a random number of paragraphs with faker.js
const generateRandomParagraphs = (count: number) => {
  const paragraphs = [];
  for (let i = 0; i < count; i++) {
    paragraphs.push(faker.lorem.paragraph());
  }
  return paragraphs.join("\n\n");
};

// Function to generate a Markdown document
const generateMarkdown = (
  title: string,
  numParagraphs: number,
  tags: string[],
) => {
  const content = `# ${title}\n\nTags: ${tags.join(", ")}\n\n${generateRandomParagraphs(numParagraphs)}`;
  return content;
};

export const genMarkdown = (): string => {
  let allMarkdownContent = "";

  for (let i = 1; i <= 3; i++) {
    const title = `Sample Blog Post ${i}`;
    const numParagraphs = faker.helpers.rangeToNumber({ min: 3, max: 7 });
    const tags = faker.lorem.words(3).split(" ");

    const markdownContent = generateMarkdown(title, numParagraphs, tags);
    allMarkdownContent += markdownContent + "\n\n" + "-".repeat(50) + "\n\n";
  }
  return allMarkdownContent;
};
