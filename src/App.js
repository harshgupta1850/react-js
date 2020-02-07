import React from 'react';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import PropsTutorial from './Components/Props'
import StateTutorial from './Components/State';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import RenderingEx from './Components/RenderingEx';
import List from './Components/List';
import Editor from './Components/Editor';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import Tables from './Components/Tables';
import Parent from './Components/Parent';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FrInputParent from './Components/FrInputParent';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundry from './Components/ErrorBoundry';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import RenderPropsDemo from './Components/RenderPropsDemo';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/UserContext';
function App() {
  return (
    <div>
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <PropsTutorial name='harsh' place= 'chandausi'> <p> Hi this is children props</p></PropsTutorial> 
      <PropsTutorial name='sharad' place= 'chandausi'/>
      <PropsTutorial name='Kajal' place= 'chandausi'/>
      <StateTutorial/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <RenderingEx/> */}
      {/* <List/> */}
      {/* <Editor/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <FragmentDemo/> */}
      {/* <Tables/>  */}
      {/* <Parent/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FrInputParent/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundry>
        <Hero heroName="BatMan"/>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Joker"/> 
      </ErrorBoundry> */}
      {/* <ClickCounter name='harsh'/>
      <HoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={ (isLoggedIn) => isLoggedIn ? 'Harsh' : 'guest'}/> */}
      {/* <RenderPropsDemo render={(count,increment)  => <ClickCounterTwo count={count} increment={increment}/> }/>
        <RenderPropsDemo render={(count,increment)  => <HoverCounterTwo count={count} increment={increment}/> }/> */}
    {/* <UserProvider value='harsh'>
      <ComponentC/>
    </UserProvider> */}
      hi
    </div>
  );
}

export default App;
