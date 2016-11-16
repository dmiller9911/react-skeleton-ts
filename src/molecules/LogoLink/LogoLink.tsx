import { StyleSheet, css } from 'aphrodite';
import * as React from 'react';
import { InjectedRouterProps, withRouter } from 'react-router';

const styles = StyleSheet.create({
  logoLink: {
    color: '#fff',
    fontSize: '16px'
  }
});

class LogoLink extends React.Component<InjectedRouterProps, {}> {
  public state: {} = {};

  public render() {
    return (
      <div onClick={ this.handleLogoClick } className={ css(styles.logoLink) }>
        React.ts
      </div>
    );
  }

  private handleLogoClick = () => {
    this.props.router.push('/');
  }
}

export default withRouter(LogoLink) as React.ComponentClass<{}>;
