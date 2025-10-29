function lightSwitch(){
  let flipSwitch = true;
  let dark = <h1>Dark is off</h1>
  let light = <h1>Light is on</h1>

function handleClick(){
  flipSwitch = !flipSwitch;
}
  return(
    <div>
      {flipSwitch ? dark : light}
      <button onClick={lightSwitch}>Light Switch</button>
    </div>
  );
}
export default lightSwitch;