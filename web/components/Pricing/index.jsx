/* This example requires Tailwind CSS v2.0+ */
import {
  BriefcaseIcon,
  CakeIcon,
  CheckIcon,
  HomeIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'
import Heading from '../Heading'

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      title: 'Wet your whistle',
      price: 24,
      frequency: '/month',
      description:
        'A moodboard full of inspiration to get your started on your journey.',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
      cta: 'Monthly billing',
      // mostPopular: false,
    },
    {
      title: 'Room service',
      price: 32,
      frequency: '/month',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      cta: 'Monthly billing',
      // mostPopular: true,
    },
    {
      title: 'The full works',
      price: 48,
      frequency: '/month',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      cta: 'Monthly billing',
      // mostPopular: false,
    },
  ],
}

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="border-gray-200 relative flex flex-col rounded-2xl border bg-champagne/25 p-8 shadow-sm"
          >
            <div className="flex-1 font-body">
              <Heading size="sm">{tier.title}</Heading>

              <p className="text-gray-500 mt-6">{tier.description}</p>

              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className="text-indigo-500 h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500 ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-900 mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  {tier.frequency}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative bg-white py-16 font-body sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8">
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg border bg-champagne/25 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-champagne p-3">
                          <feature.icon
                            className="h-6 w-6 text-black"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="text-gray-900 mt-8 text-lg font-bold tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="text-gray-500 mt-5 text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* This example requires Tailwind CSS v2.0+ */
