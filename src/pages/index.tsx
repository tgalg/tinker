import * as React from 'react'

import Layout from '@/components/layout/Layout'
import ButtonLink from '@/components/links/ButtonLink'
import UnderlineLink from '@/components/links/UnderlineLink'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://www.tgalg.com/'>
                Tom Gallagher
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  )
}
