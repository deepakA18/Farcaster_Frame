import { getFrameMetadata } from "@coinbase/onchainkit";
import type {Metadata} from 'next';


const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmYTAJZHntvzYkMdn6iHMcwUotEYHZN5trRreSNzFUSndC/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
  
});

export const metadata: Metadata = {
  title: 'One Piece: MarineFord',
  description: 'Glance of the war of Great Pirate Era!',
  openGraph : {
    title: 'One Piece: MarineFord',
    description: 'Glance of the war of Great Pirate Era!',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmYTAJZHntvzYkMdn6iHMcwUotEYHZN5trRreSNzFUSndC/0.png`]
  },
  other: {
    ...frameMetadata,
  },
}

export default function Page() {
  return (
    <>
      <h1>One Piece: MarineFord</h1>
    </>
  );
}