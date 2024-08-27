import { compileMDX } from "next-mdx-remote/rsc";

export default async function Home() {
  const source = `# Hello

<details>
  <summary>detail A</summary>

Just a detail

</details>`;

  const { content } = await compileMDX({
    source,
    components: {
      details(props) {
        return <details className="border-2 border-green-500" {...props} />;
      },
    },
  });

  return <main>{content}</main>;
}
