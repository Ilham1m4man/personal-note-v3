import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import CreateNotePage from './pages/CreateNotePage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound404 from './pages/PageNotFound404';
import Navigation from './components/Navigation';
import LoginNav from './components/LoginNav';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { error404Path, homePath, detailPath, archivePath, createPath, registerPath } from './utils/path-name';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale
              }
            }
          });
        }
      },
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const { data } = await getUserLogged();
    setTimeout(() => {
      this.setState(() => {
        return {
          authedUser: data,
          initializing: false
        };
      });
    }, 2500);

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  render() {
    if (this.state.initializing) {
      return (
        <div className="loading-container">
          <div className="loading">
            <ReactLoading className="loading-spinner" type="spokes" color="#121212" height={125} width={75} />
          </div>
        </div>
      )
    }
    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={{ theme: this.state.theme, toggleTheme: this.state.toggleTheme }}>
          <LocaleProvider value={this.state.localeContext}>
            <div className="app-container">
              <header>
                <h1><Link to={homePath}>{this.state.localeContext.locale === 'id' ? 'Catatan Pribadi' : 'Personal Note'}</Link></h1>
                <LoginNav />
              </header>
              <main>
                <Routes>
                  <Route path={error404Path} element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                  <Route path={registerPath} element={<RegisterPage />} />
                </Routes>
              </main>
            </div>
          </LocaleProvider>
        </ThemeProvider>
      )
    } else {
      return (
        <ThemeProvider value={{ theme: this.state.theme, toggleTheme: this.state.toggleTheme }}>
          <LocaleProvider value={this.state.localeContext}>
            <div className="app-container">
              <header>
                <h1><Link to={homePath}>{this.state.localeContext.locale === 'id' ? 'Catatan Pribadi' : 'Personal Note'}</Link></h1>
                <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
              </header>
              <main>
                <Routes>
                  <Route path={homePath} element={<HomePage />} />
                  <Route path={createPath} element={<CreateNotePage />} />
                  <Route path={detailPath} element={<DetailPage />} />
                  <Route path={archivePath} element={<ArchivePage />} />
                  <Route path={registerPath} element={<RegisterPage />} />
                  <Route path={error404Path} element={<PageNotFound404 />} />
                </Routes>
              </main>
            </div>
          </LocaleProvider>
        </ThemeProvider>
      );
    }
  }
}

export default App;
