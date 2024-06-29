import ServImg1 from "../assets/images/resources/servDetailImg1-1.jpg";
import ServImg2 from "../assets/images/resources/servDetailImg1-2.jpg";
import ServImg3 from "../assets/images/resources/servDetailImg1-3.jpg";
import ServImg4 from "../assets/images/resources/servDetailImg1-4.jpg";
import ServImg5 from "../assets/images/resources/servDetailImg1-5.jpg";
import ServImg6 from "../assets/images/resources/servDetailImg1-6.jpg";

import { ReactComponent as UiCreativeDesignIcon } from "../lib/icons/Curve.svg";
import { ReactComponent as DesktopApplicationIcon } from "../lib/icons/InformationService.svg";
import { ReactComponent as WebDevelopmentIcon } from "../lib/icons/Monitor.svg";
import { ReactComponent as WireframingServiceIcon } from "../lib/icons/WebProgramming.svg";
import { ReactComponent as StrategyIcon } from "../lib/icons/Strategy.svg";
import { ReactComponent as TranslationIcon } from "../lib/icons/Translation.svg";

export const servDetail = [
  {
    id: 1,
    servImg: ServImg1,
    servIcon: <UiCreativeDesignIcon className="h-[5.3125rem] w-[5.3125rem] fill-accent"></UiCreativeDesignIcon>,
    servTitle: "Graphic Illustration",
    servComments: "35",
    servLikes: "40",
    servCateList: [
      {
        cateItem: "Design,",
        cateLink: "#",
      },
      {
        cateItem: "Events,",
        cateLink: "#",
      },
      {
        cateItem: "Technology",
        cateLink: "#",
      },
    ],
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Home renovations, especially those involving plentiful of demolition can be a very dusty affair. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds of all making mistakes.",
    servDesc2: "Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
    servDesc3: "Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.",
    servDesc4: "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.",
    servTitle2: "What makes the best co-working space?",
    servInfoList: [
      {
        infoItem: "Website:",
        infoCap: "websroad.com",
      },
      {
        infoItem: "Date:",
        infoCap: "August 02, 2022",
      },
      {
        infoItem: "Services:",
        infoCap: "Design, Art Direction, Website",
      },
    ],
    servInfoList2: [
      {
        infoCap: "Quis Nostrud Exercitation Ullamco Laboris.",
      },
      {
        infoCap: "Ullamco Laboris Nisi Ut Aliquip.",
      },
      {
        infoCap: "Reprehenderit In Voluptate Velit.",
      },
      {
        infoCap: "Accusantium Doloremque Laudantium.",
      },
      {
        infoCap: "Voluptate Velit Esse Cillum.",
      },
    ],
  },
];
