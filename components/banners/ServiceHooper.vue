<template>
    <section class="banner bg-dark">
        <div class="banner-assets">
            <picture>
                <source srcset="/images/main/mobile/service.jpg, /images/main/mobile/service.jpg 2x" media="(max-width: 580px)">
                <source srcset="/images/main/tablet/service.jpg, /images/main/tablet/service.jpg 2x" media="(max-width: 960px)">
                <source srcset="/images/main/desktop/service.jpg, /images/main/desktop/service.jpg 2x" media="(min-width: 961px)">
                <img loading=lazy class="asset-image" src="/images/main/mobile/service.jpg" srcset="/images/main/mobile/service.jpg, /images/main/mobile/service.jpg 2x" alt="Сервис Брайт Парка" />
            </picture>
        </div>
        <div class="banner-content bottom-left">
            <div class="banner-title-white">
                <h1 v-html="title" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ServiceBanner",
        props: {
          title: {
            default: 'Сервис<br> Брайт Парка',
            type: String
          }
        },
        data: function () {
            return {};
        },
    }
</script>

<style scoped lang="scss">
    .banner {
        max-width: 100%;
        position: relative;
        overflow: hidden;

        &.bg-dark {
            background-color: #000;
        }

        &-assets {
            img {
                width: 100%;
                object-fit: cover;
            }
        }


        &-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            &.bottom-left {
                flex-direction: column;
                display: flex;
                justify-content: flex-end;
            }

            .banner-title-white {
                h1 {
                    text-align: left;
                    font-family: PragmaticaLightCBold, Helvetica, sans-serif;
                    font-weight: bold;
                    line-height: 1.4;
                    color: #fff;
                    text-transform: uppercase;
                    margin: 0;
                }
            }
        }

    }

    // Banner mobile
    @media only screen and (max-width: 580px) {
        .banner {
            height: calc(100vh - 105px);
            margin: -35px auto 0;

            &-assets {

                img {
                    height: 100vh;
                }
            }

            &-content {
                padding: 90px 40px;

                .banner-title-white {
                    h1 {
                        font-size: 10.2vw;
                    }
                }
            }
        }
    }

    // Banner tablet
    @media only screen and (min-width: 581px) and (max-width: 960px) {
        .banner {
            width: 100%;
            margin: -45px auto 0;

            &-content {
                padding: 90px 50px;

                .banner-title-white {
                    h1 {
                        font-size: 5.2vw;
                    }
                }
            }
        }
    }

    // Banner desktop
    @media only screen and (min-width: 961px) {
        .banner {
            width: 100%;
            margin: -75px auto 0;

            &-content {
                padding: 50px 50px;
                max-width: 1200px;
                margin: 0 auto;
                .banner-title-white {
                    h1 {
                        font-size: 4.2vw;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1920px) {
        .banner {
            max-width: 1980px;
            margin: -75px auto 0 ;
            &-content {
                .banner-title-white {
                    h1 {
                        font-size: 80px;
                    }
                }
            }
        }
    }

</style>
