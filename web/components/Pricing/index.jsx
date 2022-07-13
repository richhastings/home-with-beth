/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'
import Container from '../Container'
import Heading from '../Heading'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { CakeIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'

const PricingBlock = ({ name, description, imageUrl, price }) => (
  <div className="items-center justify-between rounded-md border border-lightgrey bg-champagne/25 p-8 lg:flex">
    <div>
      <Heading>
        {name}
        <div className="prose font-body font-bold">{price}</div>
      </Heading>
      <div
        className="prose mt-5 font-body"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
    <div className="ml-16 flex max-w-[400px] flex-shrink-0 overflow-hidden rounded-md">
      <img src={imageUrl} />
    </div>
  </div>
)

const Pricing = () => {
  const tiers = [
    {
      name: 'Get Inspired',
      imageUrl: '/images/slide1.jpg',
      description:
        "​Got an interior project in the works, but don't know where to start? I can help to get all of your ideas into a cohesive scheme that should help to focus your vision.<br /> After a 30 minute consultation, you receive a bespoke design concept board which you can then work from as a source of inspiration to bring your vision to life. You will receive your concept board alongside an email, explaining the textiles, materials and patterns to best look out for to make sure your space is cohesive and beautiful.",
      price: '£65',
    },
    {
      name: 'Personal shopping',
      imageUrl: '/images/slide2.jpg',
      description:
        '​Sometimes you need a little extra help! With this service we will start with a consultation up to an hour long, to discuss your needs and the details of the space you are updating. I will provide you with a bespoke concept board in which all items are carefully curated to maximise your specified budget. <br />During our consultation I will take some basic measurements of your space, and any pieces that are staying which will need to be worked into the new scheme. You will receive links to all sourced items, and a detailed email with suggestions on how to best make your space work.',
      price: '£100',
    },
    {
      name: 'Interior design',
      imageUrl: '/images/slide3.jpg',
      description:
        '​​Are you looking to totally transform a space? With this service I will start with an hour long consultation in which I will need to take thorough measurements of your space and talk with you about what your hope to achieve in your renovation. <br />I will produce a range of 3D visuals and a floor plan, which alongside concept and material boards, should help you to really envisage your new space. I will ensure that suggestions for new furniture and decor fits a specified budget, and in a final consultation I will talk you through the design and suggest appropriate trades where needed.',
      price: 'Prices start from £200',
    },
  ]

  const features = [
    {
      name: 'Are you local?',
      description:
        'If you live within a 25 mile radius, I offer a home visit for no extra charge!',
      icon: LocationMarkerIcon,
    },
    {
      name: 'Planning a kitchen?',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: CakeIcon,
    },
    {
      name: 'Renovating more than one room?',
      description:
        'I offer a discount of 20% for two rooms and 30% for 3 rooms or more.',
      icon: HomeIcon,
    },
    {
      name: 'Need commercial design?',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: BriefcaseIcon,
    },
  ]

  return (
    <>
      {tiers.map((tier) => (
        <PricingBlock {...tier} />
      ))}
      <Container size="narrow">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div className="text-center">
              <div className="mb-2">
                <span className="inline-flex items-center justify-center rounded-md bg-lightestgrey p-3">
                  <feature.icon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="prose font-body">
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Pricing
