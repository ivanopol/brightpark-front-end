<template>
    <div>
        <div id="layout" :class="{ active: layout }" @click="close"></div>
        <section id="panel" >
            <ul :class="theme">
                <li id="common__tab-bar__menu" class="menu-wrap event"  @click="toggleMenu">
                    <IconMenu />
                    <span class="bubble">Меню</span>
                </li>
                <li class="call-wrap" @click="toggleCall">
                    <a id="common__tab-bar__call" :href="'tel:' + $store.state.city.phone" class="event">
                      <IconCall />
                      <span class="bubble">Звонок</span>
                    </a>
                </li>
                <li id="common__tab-bar__route" class="route-map event" @click="toggleMapWindow">
                    <IconRoute />
                    <span class="bubble">Маршрут</span>
                </li>
                <li id="common__tab-bar__chat" class="chat-wrap event" @click="toggleJivo">
                    <IconChat />
                    <span class="bubble">Чат</span>
                </li>
            </ul>
        </section>

        <section id="menu" :class="{ active: open }">
            <div id="common__menu__window-close" class="close event" @click="close"></div>
            <div class="menu_wrap">
                <v-select class="select_wrap" placeholder="Выбрать город" taggable
                          :options="cities"
                          :searchable="false"
                          v-model="city_active"
                          @input="selected" >
                   <div class="spinner">Загрузка...</div>
                   <div slot="no-options">Нет совпадений</div>
                   <template #search="{attributes, events}">
                        <input id="common__menu__select-city"
                               class="vs__search event"
                               :required="!city_active"
                               v-bind="attributes"
                               v-on="events" />
                   </template>
                </v-select>

                <div class="menu_content_block">
                    <div class="models_wrap">
                        <ul class="" itemscope itemtype="http://schema.org/SiteNavigationElement">
                            <li v-for="model in $store.state.models_full" v-bind:key="model.id">
                                <a :id="'common__menu__' + model.model_slug" class="event" :href="'/' + $store.state.city.value + '/' + model.model_slug + '/' + model.type_slug" itemprop="url">
                                    <div class="title bubble" >{{model.title | correction}}</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="other_links">
                        <ul itemscope itemtype="http://schema.org/SiteNavigationElement">
                          <li>
                            <a id="common__menu__selling" :href="'https://prodai-auto.brightpark.ru/?city=' + $store.state.city.value" class="event" itemprop="url">
                              <div class="title">
                                <span>ПРОДАТЬ</span>
                              </div>
                            </a>
                          </li>
                          <li>
                              <a id="common__menu__service" :href="'/' + $store.state.city.value + '/service'" class="event" itemprop="url">
                                  <div class="title">
                                      <span>СЕРВИС</span>
                                  </div>
                              </a>
                          </li>
                        </ul>
                    </div>

                    <div class="other_links_2">
                        <ul itemscope itemtype="http://schema.org/SiteNavigationElement">
                            <li>
                                <a id="common__menu__main" :href="'/' + $store.state.city.value" class="event" itemprop="url"><div class="title bubble">Главная страница</div></a>
                            </li>
                            <li>
                                <a id="common__menu__contacts" :href="'/' + $store.state.city.value + '/contacts'" class="event" itemprop="url"><div class="title bubble">Контакты</div></a>
                            </li>
                            <li>
                                <a id="common__menu__about" :href="'/' + $store.state.city.value + '/about'" class="event" itemprop="url"><div class="title bubble">О компании</div></a>
                            </li>
<!--                            <li>
                              <a id="common__menu__credit" :href="'/' + $store.state.city.value + '/credit'" class="event" itemprop="url"><div class="title bubble">Кредит</div></a>
                            </li>-->
                            <li>
                                <a id="common__menu__stocks" :href="'/' + $store.state.city.value + '/stocks'" class="event" itemprop="url"><div class="title bubble">Акции</div></a>
                            </li>
                            <li>
                                <a id="common__menu__news" :href="'/' + $store.state.city.value + '/news'" class="event" itemprop="url"><div class="title bubble">Новости</div></a>
                            </li>
                            <li>
                                <a id="common__menu__privacy" :href="'/' + $store.state.city.value + '/privacy'" class="event" itemprop="url"><div class="title font-tiny bubble">Политика конфиденциальности</div></a>
                            </li>
                        </ul>
                    </div>
                    <div class="copyright">Разработано в Брайт Парке<br>Разработано с любовью</div>
                    <div class="postscript">
                      <span class="postscript-message">Брайт парк<br>
                      официальный дилер LADA<br></span>
                      <span class="postscript-mode">Режим работы: {{$store.state.city.opening_hours.hours_split.from}} - {{$store.state.city.opening_hours.hours_split.to}}</span>
                    </div>
                </div>
            </div>
        </section>
        <section id="map_window" :class="{ active: openMap }">
            <div class="map_wrap">
                <div id="common__route__window-close" class="close event" @click="close"></div>
                <TouchBarMap keep-alive :coordinates="$store.state.city.coords.split(', ')" />
            </div>
        </section>
    </div>
</template>

<script>


export default {
        name: 'TabBar',
        props: {
            theme: {
                default: 'light',
                type: String
            },
        },
        data: function () {
            return {
                open: false,
                jivoOpen: false,
                openMap: false,
                layout: false,
                fixed: false,
                goal_call: 'zvonok',
                goal_route: 'marshrut',
                cities: {},
                city_active: {},
                isProduction: process.env.NODE_ENV === 'production'
            };
        },
        filters: {
          correction: function (value) {
            let tmp_value = value
            if (tmp_value === '4x4 | Legend') {
              tmp_value = 'Niva Legend'
            }

            if (tmp_value === 'Niva') {
              tmp_value = 'Niva Travel'
            }

            return tmp_value
          }
        },
        methods: {
            sendGoals: function (goal) {
                if (goal && this.isProduction) {
                    let ym_ids = this.getCountersIds();
                    let goalArr = goal.match(/^(.+?):(.+?)$/);
                    let target_goal = goalArr === null ? goal : goalArr[2];

                    ym_ids.forEach(function (item, i, arr) {
                        window["yaCounter" + item].reachGoal(target_goal);
                    });
                }
            },
            getCountersIds: function () {
                var id_list = [];
                window.ym.a.forEach(function(item){
                    id_list.push(item[0]);
                });
                return id_list;
            },
            toggleJivo: function() {
                if (this.jivoOpen) {
                    this.fixBody(true);
                    this.open = false;
                    this.openMap = false;
//                    this.layout = false;
                  //  jivo_api.close();
                } else {
                    this.fixBody(false);
                    this.open = false;
                    this.openMap = false;
               //     this.jivoOpen = true;
                  //  this.layout = true;
               //     jivo_api.open();
                }

            },
            toggleMenu: function() {
                this.openMap = false;
                if (typeof jivo_api !== "undefined" && jivo_api !== null) {
                    jivo_api.close();
                }
                this.open = !this.open;
                this.layout = this.open;
                this.fixBody(this.open);
                return this.open;
            },
            close: function() {
                this.openMap = false;
                if (typeof jivo_api !== "undefined" && jivo_api !== null) {
                   jivo_api.close();
                }
                this.layout = false;
                this.fixBody(false);
                return this.open = false;
            },

            selected: function(event) {
                let segments = window.location.pathname.slice(1).split('/');
                segments[0] = event.value;
                let segments_str = segments.join('/');

                let data = {
                    'btn_id': 'common__menu-select-city__' + event.value,
                    'href': '/' + segments_str,
                    'location': window.location.pathname,
                    'timestamp': new Date().toISOString(),
                    'event_type': 'button'
                };

                this.$axios({
                    method: 'post',
                    url: process.env.apiUrl + '/api/write_event',
                    data: data
                }).then((response) => {
                    window.location.href = window.location.protocol + '//' + window.location.host + '/' + segments_str;
                });
            },
            toggleMapWindow: function() {
                this.open = false;
                if (typeof jivo_api !== "undefined" && jivo_api !== null) {
                    jivo_api.close();
                }
                this.openMap = !this.openMap;
                this.layout = this.openMap;
                this.fixBody(this.openMap);

                if (this.openMap) {
                    this.sendGoals(this.goal_route);
                }
                return this.openMap;
            },
            toggleCall: function() {
                this.layout = false;
                this.openMap = false;
                this.open = false;
                this.jivoOpen = false;
                this.fixBody(false);
                this.sendGoals(this.goal_call);
            },
            handleScroll: function() {
                this.scrolled = window.scrollY > 60;
            },
            loadScript: async function() {
/*                let jivoScript = document.createElement('script');
                jivoScript.setAttribute('src', '//code-ya.jivosite.com/widget/' + $store.state.city.jivosite_token);
                jivoScript.setAttribute('async', '');
                document.body.appendChild(jivoScript);*/
            },
            fixBody: function (state) {
                var body = document.body;
                if (state) {
                    body.classList.add("fix-body");
                } else {
                    body.classList.remove("fix-body");
                }
            }
        },
        watch: {
          '$store.state._menu': function() {
            this.toggleMenu()
          }
        },
    mounted() {
      var body = document.body;
      if (body.classList.contains('fix-body')) {
        body.classList.remove("fix-body");
      }
    },
    created () {
      this.cities = this.$store.state.cities
      this.city_active = {
        value: this.$store.state.city.value,
        label: this.$store.state.city.label,
      }
    },
    destroyed () {
    }
}
</script>

<style lang="scss">

    .spanner {
        width: 22px;
    }

    .copyright {
        font-size: 12px;
        margin: 50px 10px 40px 10px;
        line-height: 1.6;
        color: #fff;
    }

    .postscript {
        color: #fff;
        line-height: 1.4;
        margin: 50px 10px 40px 10px;

        &-message {
          font-size: 12px;
        }

        &-mode {
          font-size: 10px;
        }
    }

    @media only screen and (min-width: 580px) {
        .copyright {
            font-size: 14px;
            margin: 30px 10px 40px 20px;
        }

        .postscript {
          margin: 30px 10px 40px 20px;
          &-message {
            font-size: 14px;
          }

          &-mode {
            font-size: 12px;
          }
        }
    }

    .menu-desktop {
        background: url('/images/icons/menu-desktop.png') no-repeat;
    }

    .route-desktop {
        background: url('/images/icons/route-desktop.png') no-repeat;
    }

    #layout {
        &.active {
            content: "";
            display: block;
            z-index: 29;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: fixed;
            background-color: rgba(0, 0, 0, 0.3);
            -webkit-transition: all ease-in 0.3s;
            -moz-transition: all ease-in 0.3s;
            -o-transition: all ease-in 0.3s;
            transition: all ease-in 0.3s;
        }
    }

    .close {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        color: #FF8351;
        font-weight: bold;
        padding: 12px;
        box-sizing: content-box;
        border-radius: 20px;
        z-index: 1;

        &:before,
        &:after {
            content: "";
            width: 25px;
            height: 2px;
            background-color: #FF8351;
            display: block;
            position: absolute;
        }

        &:before {
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            top: 20px;
            left: 10px;
        }

        &:after {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            left: 10px;
            top: 20px;
        }
    }

    #menu {
        display: block;
        position: fixed;
        width: 80vw;
        height: 100vh;
        background-color: #000;
        top:0;
        z-index:30;
        padding: 3.2vh 12.75vw;
        margin-left: -200vw;
        /* Переход */
        -webkit-transition: all ease-in 0.3s;
        -moz-transition: all ease-in 0.3s;
        -o-transition: all ease-in 0.3s;
        transition: all ease-in 0.3s;

        &.active {
            margin-left: 0;
        }

        ul {
            li {
                font-family: 'Factor A';//PragmaticaLightC, Helvetica, sans-serif;
                padding: 10px;
            }
        }

        .models_wrap {
          margin-bottom: 3vh;
        }

        .other_links,
        .models_wrap {
            padding: 0;
            background: none;

            ul {
                padding: 0;

                li {
                    padding: 0;
                    width: 100%;
                    display: flex;
                    justify-content: left;
                    flex-wrap: nowrap;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
                    -webkit-box-align: center;
                    align-items: center;
                    a {
                        display:block;
                        width: 100%;
                        padding: 15px 10px;
                        color: #fff;

                        @media only screen and (min-width: 900px) and (max-width: 1600px){
                          & {
                            padding: 12px 10px;
                          }
                        }

                        @media only screen and (min-width: 1601px) {
                          & {
                            padding: 15px 10px;
                          }
                        }

                        .title {
                            width: 100%;
                            font-size: 16px;
                            padding-left: 10px;
                            color: #fff;
                            text-transform: uppercase;
                            position: relative;
                            font-weight: bold;
                            &:after {
                                width: 10px;
                                height: 10px;
                                position: absolute;
                                content: "";
                                display: block;
                                -webkit-transform: rotate(45deg);
                                transform: rotate(45deg);
                                border: 2px solid #FF8351;
                                right: 0;
                                top: 0;
                                border-left: none;
                                border-bottom: none;
                            }
                        }
                    }
                }
            }
        }

        .other_links {
            margin: 15px 0;

            ul li {
              //  border-bottom: none;
                &:last-child {
                  border-bottom: none;
                }
                a .title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    text-transform: none;
                    font-family: PragmaticaLightC, Helvetica, sans-serif;
                    font-weight: bold;

                    span {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    &:after {
                        position: relative;
                        top: unset;
                    }

                    .spanner {
                        margin-right: 10px;
                    }

                    &.font-tiny {
                        font-weight: normal;
                    }
                }
            }
        }

        .other_links_2 {
            ul {
                li {
                    padding: 5px 0 5px 0;
                    a {
                        color: #fff;

                        .title {
                            font-size: 85%;
                            padding-left: 10px;
                            text-transform: none;
                            font-family: PragmaticaLightC, Helvetica, sans-serif;
                            font-weight: bold;

                            &.font-tiny {
                               // font-weight: normal;
                            }
                        }
                    }
                }
            }
        }

        @media only screen and (min-width: 580px) {
            .other_links_2 {
                ul {
                    li {
                        padding: 8px 0;
                        a {
                            color: #fff;

                            .title {
                                font-size: 95%;
                                padding-left: 20px;
                                text-transform: none;
                                font-family: PragmaticaLightC, Helvetica, sans-serif;
                                font-weight: bold;

                                &.font-tiny {
                                    // font-weight: normal;
                                }
                            }
                        }
                    }
                }
            }
        }

        .select_wrap {
            position: relative;
            /*margin-bottom: 30px;*/
            margin-bottom: 3vh;
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
            width: 90%;

            &.vs--disabled .vs__clear,
            &.vs--disabled .vs__dropdown-toggle,
            &.vs--disabled .vs__open-indicator,
            &.vs--disabled .vs__search,
            &.vs--disabled .vs__selected {
                background-color: #eef2f7;
                border: 2px solid #eef2f7;
                color: #fff;
            }

            .vs__dropdown-toggle {
                background-color: transparent;
                border: 2px solid transparent;
                height: 42px;
                overflow: hidden;
            }

            .vs__search, .vs__search:focus {
                line-height: 2;
                padding: 0 17px;
                color: #fff;
                font-family: PragmaticaLightC, Helvetica, sans-serif;
                font-size: 1em;
                font-weight: normal;
            }

            .vs__selected {
                padding: 0 25px 0 14px;
                height: 34px;
                color:#fff;
                font-weight: normal;
            }

            &.vs--single.vs--open .vs__selected {
                line-height: 2;
                height: 34px;
            }

            &.vs--searching .vs__search {
                color: #fff;
            }

            .vs__actions {
                padding-right: 17px;
            }

            .vs__dropdown-option {
                color: #fff;
                font-weight: normal;
                font-family: PragmaticaLightC, Helvetica, sans-serif;
                border-bottom: 1px solid rgba(255, 255, 255, 0.18)
            }

            .vs__dropdown-option:last-child {
                border-bottom: none;
            }

            .vs__dropdown-menu {
                background-color: #3e3e3e;
            }

            &.vs--open .vs__dropdown-toggle {
                background-color: #000;
                border: 2px solid #000; //rgba(60, 60, 60, 0.26);
                border-bottom: none;
            }

            .vs__dropdown-menu {
               // border: 2px solid transparent;
                border: none;
                border-top: none;
               // background-color: #000;
                color: #000;
                padding: 0;
            }

            .vs__dropdown-option--selected,
            .vs__dropdown-option--highlight {
                background-color: #FF8351;
                color: #000;
            }

            .vs__fade-enter-active,
            .vs__fade-leave-active {
                transition: none;
            }

            .vs__open-indicator {
                transition: none;
            }

            .close {
                display: block;
                position: absolute;
                top: 50%;
                margin-top: -12px;
                right: 40px;
                width: 25px;
                height: 25px;
                background-color: transparent;
                border-radius: 15px;
                border: 1px solid #9299a2;
                cursor: pointer;

                &:before,
                &:after {
                    content: '';
                    display: block;
                    width: 14px;
                    height: 1px;
                    background-color: #9299a2;
                    position: absolute;
                    top: 11px;
                    left: 5px;
                }

                &:after {
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                }

                &:before {
                    -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
            }

            .toggle {
                display: block;
                position: absolute;
                top: 50%;
                margin-top: -11px;
                right: 18px;
                width: 10px;
                height: 10px;
                border: 2px solid #FF8351;
                border-top: none;
                border-left: none;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            &.vs--open .toggle {
                -webkit-transform: rotate(225deg);
                transform: rotate(225deg);
                margin-top: 0;
            }
        }

        .menu_content_block {
            height: 76vh;
            overflow: auto;
            width: 100%;
            padding-right: 3vh;
            padding-bottom: 10vh;
        }

        @media only screen and (min-width: 580px) {
          .menu_content_block {
            height: 85vh;
          }
        }

        @media only screen and (max-width: 580px) {

            & {
                padding: 3.2vh 1vh 3.2vh 5.75vw;

                .select_wrap {
                    width: 80%;
                    .vs__selected {
                        padding: 0 25px 0 5px;
                        height: 34px;
                        color:#fff;
                        font-weight: normal;
                    }
                }

                .other_links,
                .models_wrap {
                    ul li a {
                        padding: 6% 10px;
                        .title {
                            font-size: 14px;
                            padding-left: 0;
                        }
                    }
                }
            }
        }
    }

    #panel {
        display: block;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 40;

        ul {

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            padding: 8px 25px 14px;
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);

            &.light {
                background-color: rgba(255, 255, 255, 0.7);
                span {
                    color: #000;
                }
            }

            &.dark {
                background-color: rgba(0, 0, 0, 0.7);

                span {
                    color: #fff;
                }
            }

            li {
                text-align: center;
                margin: 0 15px;

                & > a div,
                & > div {
                    width: 20px;
                    height: 20px;
                    display: block;
                    margin: 0 auto 2px;
                    font-weight: normal;
                }
                & > a span,
                & > span {
                    font-size: 12px;
                    font-weight: normal;
                }

            }
        }
    }

    #map_window {
        display: block;
        position: fixed;
        width: 80vw;
        height: 100vh;
        background-color: #fff;
        z-index:30;
        margin-left: -200vw;
        padding: 0 0 51px;
        /* Переход */
        -webkit-transition: all ease-in 0.3s;
        -moz-transition: all ease-in 0.3s;
        -o-transition: all ease-in 0.3s;
        transition: all ease-in 0.3s;

        .close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 20px;
            height: 20px;
            color: #FF8351;
            font-weight: bold;
            padding: 12px;
            box-sizing: content-box;
            border-radius: 25px;
            background: #fff;
            box-shadow: 0 1px 2px 1px rgba(0,0,0,.15), 0 2px 5px -3px rgba(0,0,0,.15);

            &:before,
            &:after {
                content: "";
                width: 25px;
                height: 4px;
                background-color: #666666;
                display: block;
                position: absolute;
            }

            &:before {
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
                top: 21px;
                left: 10px;
            }

            &:after {
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                left: 10px;
                top: 21px;
            }
        }

        &.active {
            margin-left: 0;
        }

        .map_wrap {
            padding: 0;
            height: 100%;
        }

        .map-wrapper-bar{
            width: 100%;
            height: 100%;
        }

        .map-wrapper{
            height: 100%;
        }
    }

    @media only screen and (max-width: 1024px) {
        #panel {
            display: block;
        }

        #panel-desktop {
            display: none;
        }
    }

    @media only screen and (min-width: 1025px) {
        #panel {
            display: none;
        }

        #panel-desktop {
            display: flex;
            justify-content: flex-end;
        }
    }

    @media only screen and (min-width: 580px) {
        #map_window {
            padding: 0;
        }

        #map_window,
        #menu {
            width: 70vw;
            max-width: 500px;
        }
        #menu {
            padding: 35px 10px 35px 56px;
            .other_links ul li a,
            .models_wrap ul li a {
              //  padding-top: 22px;
            }
        }
    }
</style>
