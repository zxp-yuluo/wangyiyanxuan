 <template>
  <div class="login">
    <div class="login-header">
      <div class="login-header-left" @click="goHome">
        <i class="lhl-home"></i>
      </div>

      <div class="login-header-center"></div>

      <div class="login-header-right">
        <div class="lhrsearch" @click="goSearch"></div>

        <div class="lhrcart" @click="goCart"></div>
      </div>
    </div>

    <div class="login-main" v-if="register">
      <div class="cont">
        <div class="logoWrap">
          <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
        </div>

        <div class="btnWrap">
          <div class="btn-tel" @click="telClick">
            <i class="tel-icon"></i>

            手机号快捷登录
          </div>

          <div class="btn-email" @click="emailClick">
            <i class="email-icon"></i>

            邮箱帐号登录
          </div>
        </div>
      </div>

      <div class="thirdWrap">
        <div class="itemWrap">
          <div class="item-icon wx"></div>

          <div class="item-titel">微信</div>
        </div>

        <div class="itemWrap line">
          <div class="item-icon qq"></div>

          <div class="item-titel">QQ</div>
        </div>

        <div class="itemWrap">
          <div class="item-icon wb"></div>

          <div class="item-titel">微博</div>
        </div>
      </div>
    </div>

    <div class="login-main telRegister" v-if="telRegister">
      <div class="content">
        <div class="telR-logo">
          <img src="/img/logo.png" alt />
        </div>

        <div class="telR-main">
          <div class="telNumber">
            <input type="text" placeholder="请输入手机号" />
          </div>

          <div class="telPassword">
            <input type="password" placeholder="请输入密码" />
          </div>
        </div>

        <div class="tablogin">
          <div class="wangjimima">忘记密码?</div>

          <div class="duanxindenglu">短信快捷登录</div>
        </div>

        <div class="loginBtn" @click="loginClick">登录</div>

        <div class="otherWrap" @click="otherClick">
          <div class="other">其他方式登录</div>

          <i class="other-icon"></i>
        </div>
      </div>
    </div>

    <div class="login-main emailRegister" v-if="emailRegister">
      <div class="er-content">
        <div class="erc-logo">
          <img src="/img/logo.png" alt />
        </div>

        <div class="erc-main">
          <div class="ercNumber">
            <input type="email" placeholder="请输入邮箱" />
          </div>

          <div class="ercPassword">
            <input type="password" placeholder="请输入密码" />
          </div>
        </div>

        <div class="erc-tip">
          <div class="zhucezhanghao">注册账号</div>

          <div class="wangjimima">忘记密码</div>
        </div>

        <div class="emailLogin">登录</div>

        <div class="emailOther">
          <div class="qita" @click="otherClick">其他方式登录</div>

          <div class="email-icon"></div>
        </div>
      </div>
    </div>

    <div class="bgline"></div>
  </div>
</template>



<script>
export default {
  name: "login",

  data() {
    return {
      register: true,

      telRegister: false,

      emailRegister: false,
    };
  },

  methods: {
    registerClick() {
      console.log(111);
    },

    telClick() {
      console.log("手机注册");

      this.telRegister = true;

      this.emailRegister = false;

      this.register = false;
    },

    emailClick() {
      console.log("邮箱注册");

      this.telRegister = false;

      this.emailRegister = true;

      this.register = false;
    },

    otherClick() {
      console.log("其它登录");

      this.telRegister = false;

      this.emailRegister = false;

      this.register = true;
    },

    loginClick() {
      console.log("登录");
    },

    goHome() {
      this.$router.replace("/home");
    },

    goSearch() {
      this.$router.replace("/search");
    },

    goCart() {
      this.$router.replace("/cart");
    },
  },
};
</script>



<style lang="stylus" scoped>
img
  vertical-align middle
.bgline
  position fixed
  height 49px
  bottom 0
  left 0
  right 0
  background #f2f5f4
.login
  height 100%
  .login-header
    background #fff
    height 44px
    padding 0 8px 0 12px
    display flex
    justify-content space-between
    position relative
    .login-header-left
      .lhl-home
        display inline-block
        width 22px
        height 100%
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=')
        background-size 20px 20px
        background-position center
        background-repeat no-repeat
    .login-header-center
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 86px
      height 27px
      background url('/hd.png.webp') no-repeat
      background-size cover
      background-position 0 -64px
    .login-header-right
      .lhrsearch
        display inline-block
        width 30px
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC')
        background-size 20px 20px
        background-position center
        background-repeat no-repeat
        height 100%
        margin-right 7.5px
      .lhrcart
        display inline-block
        width 24.5px
        height 100%
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=')
        background-size 20px 20px
        background-position center
        background-repeat no-repeat
  .login-main
    display flex
    flex-direction column
    justify-content space-between
    background #F2F5F4
    height calc(100vh - 44px - 49px)
    position relative
    z-index 2
    .cont
      .logoWrap
        display flex
        justify-content center
        align-items center
        margin 80px 0 116px 0
        img
          width 134px
          vertical-align middle
      .btnWrap
        padding 0 20px
        text-align center
        font-size 14px
        .btn-tel
          line-height 47px
          border-radius 2px
          margin-bottom 16px
          color #ffffff
          background #DD1A21
          display flex
          align-items center
          justify-content center
          .tel-icon
            display inline-block
            background url('/yanxuan.png') no-repeat
            background-size cover
            width 20px
            height 20px
            background-position 0 -25px
            margin-right 8px
        .btn-register
          line-height 42px
          text-align center
          border 1px solid #DD1A21
          border-radius 2px
        .btn-email
          display flex
          align-items center
          justify-content center
          margin-bottom 16px
          line-height 42px
          border-radius 2px
          border 1px solid #DD1A21
          .email-icon
            display inline-block
            background url('/yanxuan.png') no-repeat
            background-size cover
            width 20px
            height 20px
            margin-right 8px
            background-position 0 0
    .thirdWrap
      line-height 20px
      display flex
      justify-content center
      .itemWrap
        padding 0 20px
        font-size 14px
        display flex
        &.line
          border-left 1px solid #000
          border-right 1px solid #000
        .item-icon
          width 20px
          height 20px
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUNEOUZFNTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUNEOUZFNDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77g6IhAAADV0lEQVR42uyYbWjNURzH7zYlc1FrNPO0FvPcFrcwJSO8QEKmRIQ8lFIeyhtZXihFUYTWjCUvRIg8NJFCqaVpMmwvsHjhkpCHbbbr86vfam7/83+4//+fbt1Tn87tnqfvOf9zfr/fOVmJRCKSTik7kmYpIzgjON0F93FbMRaLyeRmwmKYDmMhT/vohE/QDI/gOjwGSxPU0NCQsuAsJ7OGUBG0EXZDsYe+W+Ew1OiEAhGc7SB2ClkjnPAoVtJobfcUpoW+hxG7Uj/vRJ9jjIcH+pXCEYzY5WTnoW+AZ6UatgUuGLFymOoMk3kLLQ59/oQn0G5RdhTmBL3CxyHX4v8qKOLAlJCfNPQnVmIUTNV9220xXg2L0i8QwXRUTjbXUPccYntMSr2hzk2I6285bB8s6hTB+qBWeI1N3SomlAdRmwFXQ7n+lkNbYKiXsuC/7DBi5JOOc2jTBTkOdX4nOaVXanHENn/X9kf4Yl1+BXd68X4OSfo6DadgOCyAMhgGg+ArvNetcwNuM4EOr4KDiubFlW2CebALBrtoI3v/kFgShLe73cOdAYi9AFvUjh90KTai9aR+Iws32a3gZp9i69XW3nVxFkxJ2j1EdIUbwXd8iP0Ie+AaDPQ58QFwBdElToKrTSGhi7QP9mvImZwuwmVDuxfqiOJJ/8uk6xCdZRTMZpfGZ1IQKyf+GSy0KBOhK2AZ1FqUz2bcreRLLMrEWy5ycs074bVHwbdgqaGsWF19fyixKJ+geZmh/VrHAJ7PIJ3ch3yXgmWSlTZx7xd1FlGLsm514SavGOcLDLENL6nwnGyWh5V+ZzNgRB1F1MZSFTiYO+cAHtHNGnW9dCE4oS47jNTt5dYsfn+oi07F3b4JSXCLl1vz/F42tU1dZ0RXfhIUgsS2Y+AeVIQg+KoXwZUq9IAEMj3BCYfSqu5ItcU5AYr9Bce8CJYoaoObKEqvT9L59gAF72XsNk/vEoZLqqkoV+Pe0gDEXhKH0+uWE8pT1Q8NKZt89iPecVWy2LDe1uL6pHU2xfa1urIdnl9+fKRvsA5maPTmxUZ32F2dgt7DppSvt/FStSZRddetejuRLbQZdsBnGGG1Hf6l4GQvauq3UENUuSY1BSb4f6bMC3xGcEZwRrB9+iPAAJtj9ugB6JTsAAAAAElFTkSuQmCC')
          background-size cover
          &.qq
            background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUJBRTQ1MDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDODkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4pjhZyAAACIUlEQVR42uyZPUjDQBTHU621gq2KHdSiIurQrdgOOlhpQfzCuSAoFCelFNRdCm4u4iCujl2cRFHo5qKguDjoIC4VRBCs+K1Y/4cnhKLF9N5LKeTBjzva3OXHy+WSu9hyuZxWTlGhlVlYwpZwXtiLaZRMJn/7eQCMgyBoBTXgBWTACdgC6QLt+YTzwgdWweAf/3eAfpAA+2AOHJdqSIyC0wKy+SHEj5DhaCmEA2C7yD5SkA6bKewAe4pXZwfSdWYJL4NGRWEnWDPayGb00YysuFFkCWeqZvR5zZnhqEYbU9xDYoxYeIRbOEgsHMCQcLAIo2MvCi+xsAt0cWWYWvYnWriEa5mEXVzCj0zCT1zCHiZhD5dwgkk4Tv6kkzNEhvHd3IdznFFmeIZ5MRGnHhLTzMKTyLCNRBgdhVA0MQu75RKLJMMxk9aYMeWbTl6mW9BggvCrOA/O+ayS4V6TZEVUg4jqkAhr5kZYVbhHV88ySd7p6n5V4U5ZrjDOxQtgUdbbVIX98uab1+TODUMcov8lWe9WFRaSE7IuZosrYtl7cKFbLqWpV81iEZoiFJ5Fn+tsy3wpvYtiiED2AH31mbGRMgw2FGU3jcqqCIutVdWPIx8QjhhtZGhI4ARi31dsmbYTjuEbEELf5/852Oj+sFtm9lL73hCsklfpU2RMvgsIHoB4H3DKhatTPnbtuuPfwRuoBPWsN10pw/ooYwmXu/CXAAMA+zyBlSoNLhoAAAAASUVORK5CYII=')
            background-size cover
          &.wb
            background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMTRGQTJCRTkyREUxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTRGQTJCRDkyREUxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz69ps7IAAAEX0lEQVR42uxYaWxNQRRuKW2sba0NipbEVuuzxlb0R2NJCBUN0RDihzW1hTRERDSWH4jYY02qKsUPaywRW+URiSYoJahICZpQW/F8J76XTCZz77v3VWmTd5Ivc2e5M989c+acMzfc5/OF1SSpFVbDJEQ4RDhE+B9LhJvBHo+nsuvVB/YDw4GmbHsN3AFOAjler/dTddJwMjBRISsSB4wBdgPPoJRZdhOEuwkcf0HDzYGbQDtqNoJt4dq4Y8BUaPv7fyUMAqY5o6nhJUB3jfRkvOP7mybREEinXV4BLgOZQG0XH1EGHMZjb2Cd0jUJmFepQ6dILLAcmA001vrkQDVjv0mjsv15QAog2isANoH0OZQruYsrOHwt6ofQ96EyGp4JFHELG1uMSQvgKcZzdxqR+FkQW8P+VcB9ZQenB2USmDCGmtkDNAkwPNrGBMRtTQE2A3uBz+zKwhrJ6P/BPr+MdW0SmChRtAB0cPh9T5TnurTPbphHPrRcPAWIHeXcO+g5Imhicg7OKO/3dEXY88eoTtMuncozYJy4JiAVaGCYV3YrDcS9eBbCQ+SjuAulaCun+cQ6JoyXklBcsNtiGxtOCzBGAsgozt+QbeVcV7xMJNt+OrJhvNQ2SLJuJJFlEctTLLsqynwRUMMgG8WXW1RxqC5mKYcwE6ZQwnqCMua6E5PYqEUdkzwGLgIPgIfAF+Aj84SWfH8o0M8Qev3bf5U2+wtFidInPjmXCltrG5qh3YEobliQlEV2AruARw61KHnDHEatekq7jxFyHwhfc7olJsK3UPQ3jD0ALAI+BLn98YC4sgGGvktABoi/dJXAg+wgA9kKJiEZGlnxqctoFk/pe8X9zbAwNTk8IwGTNkeIL8b68W5vHNMMY9JBNldv44FZz8Xa88SnMnrdBloZotxnHrCvhnVk/Da3hEdodbGvPK1NNHjEJo8Q6cUwHm4gXcLU0SSjmW46Jpyg1bO1utwOtljMdQJ4r9TFVodZjL1nwyfODWHV9kqhjSKDKdRXfOgamkAZsFTLIUR6WB12G06lbi6hL3ia/YdNl84sxfd6lEyrQolWuhs0yVCL9gIo6b0bDZ9TDwHsSU943rHMV8haERN/ed4QRbuIrVrwyXZ76CQP/aFs21yDnfqvL234PIGBQZcdeh4AshI4DlpcoY5Du/muCOMFCbGrlablWGSIUpc0cCvQkWQkHB9X7Novks8u1Npi2N7HwEPcYEawf37kIrhdSb7l+jJZ6V/Ai6aYR5T27itgPm/B6hVd6oUWtitmkxLoB0rAaz5IijlsUEidZ/0i7VPa+zJgVDAZknv8L46PpK0uBgYalvhGL5MNsj+DziUMV6P1TLb98pykb9Es3vAD6gCtgS70ICkGU/EfRomcWSD62G1C4uhHCoh34sFKC+TYbUQSmxzJ9kC0ONgE2u2fn1oMBoOBJKINw3QD5Urzljshh/guL5aF+l+cKidcHST0QztEOEQ4RNhefgswAK2gUVck8X2vAAAAAElFTkSuQmCC')
            background-size cover
    &.telRegister
      .content
        .telR-logo
          margin 28px 0 77px 0
          display flex
          justify-content center
          align-items center
          img
            width 134px
        .telR-main
          padding 0 20px
          .telNumber
            border-bottom 1px solid #d9d9d9
            input
              border none
              outline none
              margin 14px 0
              width 100%
              background #f2f5f4
          .telPassword
            border-bottom 1px solid #d9d9d9
            input
              border none
              outline none
              margin 14px 0
              width 100%
              background #f2f5f4
        .tablogin
          padding 20px
          display flex
          justify-content space-between
          .wangjimima
            font-size 14px
            color #999
          .duanxindenglu
            font-size 16px
        .loginBtn
          background #DD1A21
          color #fff
          font-size 14px
          line-height 50px
          text-align center
          margin 0 20px
          border-radius 4px
          margin-bottom 43px
        .otherWrap
          display flex
          justify-content center
          align-items center
          .other
            font-size 14px
          .other-icon
            margin-left 2px
            width 14px
            height 14px
            background url('/img/arrow-right.png.webp') no-repeat
            background-size cover
    &.emailRegister
      .er-content
        .erc-logo
          margin 28px 0 72px 0
          display flex
          justify-content center
          align-items center
          img
            width 134px
        .erc-main
          padding 0 20px
          .ercNumber
            border-bottom 1px solid #d9d9d9
            input
              border none
              outline none
              margin 14px 0
              width 100%
              background #f2f5f4
          .ercPassword
            border-bottom 1px solid #d9d9d9
            input
              border none
              outline none
              margin 14px 0
              width 100%
              background #f2f5f4
        .erc-tip
          display flex
          justify-content space-between
          padding 20px
          .zhucezhanghao, .wangjimima
            font-size 14px
            color #999
        .emailLogin
          background #DD1A21
          color #fff
          font-size 14px
          line-height 50px
          text-align center
          margin 0 20px
          border-radius 4px
          margin-bottom 43px
        .emailOther
          display flex
          justify-content center
          align-items center
          .qita
            font-size 14px
          .email-icon
            margin-left 2px
            width 14px
            height 14px
            background url('/img/arrow-right.png.webp') no-repeat
            background-size cover
</style>