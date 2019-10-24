<script>
  import { Button, Flex } from '@components'
  import Logo from '@images/svg/logo.svg'
  import RalaliLogo from '@images/svg/ralali-logo-white.svg'
  import GoogleLogo from '@images/svg/google-logo.svg'
</script>

<style>
  .icon {
    padding: 0 10px;
  }
</style>

<Flex alignItems="center" justifyContent="center">
  <img src={Logo} alt="Logo" />
</Flex>
<Flex>
  <Button color="primary" block flex rounded>
    <img class="icon" src={RalaliLogo} alt="Google Logo" /> Login with Ralali Account
  </Button>
</Flex>
<Flex>
  <Button color="secondary" block flex outline rounded>
    <img class="icon" src={GoogleLogo} alt="Google Logo" /> Login with Google Account
  </Button>
</Flex>
<Flex alignItems="center" justifyContent="center">
  <label>Haven't registered yet?</label>
</Flex>
<Flex>
  <Button color="primary" block outline rounded>
    Create Account
  </Button>
</Flex>