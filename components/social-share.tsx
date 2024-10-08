import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export default function SocialShare({ url }: { url: string }) {
  return (
    <div className='flex flex-col justify-center items-center gap-3 px-5 py-3'>
      <strong>Bagikan:</strong>
      <div className='flex gap-3'>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
}
