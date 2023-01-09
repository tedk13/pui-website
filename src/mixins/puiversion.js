export default async function PuiVersion() {
    return await fetch(
      'https://registry.npmjs.org/-/package/@ritterim/platform-ui/dist-tags'
    )
      .then((response) => response.json())
      .then((data) => data.latest);
}