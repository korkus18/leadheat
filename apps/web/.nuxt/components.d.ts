
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const Footer: typeof import("../components/layout/Footer.vue")['default']
export const NavBar: typeof import("../components/layout/NavBar.vue")['default']
export const FinalCtaSection: typeof import("../components/sections/FinalCtaSection.vue")['default']
export const HeatScoreSection: typeof import("../components/sections/HeatScoreSection.vue")['default']
export const HeroSection: typeof import("../components/sections/HeroSection.vue")['default']
export const HowItWorksSection: typeof import("../components/sections/HowItWorksSection.vue")['default']
export const IntegrationsSection: typeof import("../components/sections/IntegrationsSection.vue")['default']
export const ProblemSection: typeof import("../components/sections/ProblemSection.vue")['default']
export const GradientButton: typeof import("../components/ui/GradientButton.vue")['default']
export const HeatScoreGauge: typeof import("../components/ui/HeatScoreGauge.vue")['default']
export const SectionLabel: typeof import("../components/ui/SectionLabel.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyFooter: LazyComponent<typeof import("../components/layout/Footer.vue")['default']>
export const LazyNavBar: LazyComponent<typeof import("../components/layout/NavBar.vue")['default']>
export const LazyFinalCtaSection: LazyComponent<typeof import("../components/sections/FinalCtaSection.vue")['default']>
export const LazyHeatScoreSection: LazyComponent<typeof import("../components/sections/HeatScoreSection.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/sections/HeroSection.vue")['default']>
export const LazyHowItWorksSection: LazyComponent<typeof import("../components/sections/HowItWorksSection.vue")['default']>
export const LazyIntegrationsSection: LazyComponent<typeof import("../components/sections/IntegrationsSection.vue")['default']>
export const LazyProblemSection: LazyComponent<typeof import("../components/sections/ProblemSection.vue")['default']>
export const LazyGradientButton: LazyComponent<typeof import("../components/ui/GradientButton.vue")['default']>
export const LazyHeatScoreGauge: LazyComponent<typeof import("../components/ui/HeatScoreGauge.vue")['default']>
export const LazySectionLabel: LazyComponent<typeof import("../components/ui/SectionLabel.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.2_@emnapi+core@1.10.0_@emnapi+runtime@1.10.0_@parcel+watcher@2.5.6_@vue+compi_1812c6f4cfec90a20e2ab2635a7a33fa/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
