import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const BlogContainer = styled.div`
  padding: 20px;
  font-family: "Noto Nastaliq Urdu", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const BlogPost = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BlogTitle = styled.h2`
  margin: 10px;
  text-align: center;
`;

const BlogContent = styled.p`
  margin: 0;

  display: flex;
  flex-direction: row;
  // gap: 1rem;
  // background: red;
`;

const blogs = [
  { id: 1, title: "Blog Post 1", content: "Content in English" },
  { id: 2, title: "Blog Post 2", content: "Content in English" },
  // Add more blog posts as needed
];

const BlogSection = () => {
  const { t } = useTranslation();

  return (
    <BlogContainer>
      {blogs.map((blog) => (
        <BlogPost key={blog.id}>
          <BlogTitle>
            {t(`blog.${blog.id}.title`, { defaultValue: blog.title })}
          </BlogTitle>
          <BlogContent>
            {t(`blog.${blog.id}.content`, { defaultValue: blog.content })}
          </BlogContent>
        </BlogPost>
      ))}
    </BlogContainer>
  );
};

export default BlogSection;
