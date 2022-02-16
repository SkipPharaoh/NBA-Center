            // IMPORTS //
import { Button, Card } from 'react-bootstrap'
import AltTeamLogo from '../Data'


function TeamLogos(props){
    // Props //
    const {team} = props

    // VARIABLES //
    let showLogos = false

    

    // PUT IMAGES IN AN ARRAY //
    // function importAll(r) {
    //     let AltLogos = [];
    //     r.keys().map((item, index) => { AltLogos[item.replace('./', '')] = r(item); });
    //     return AltLogos;
    // }

    // 76ERS ALT LOGOS //
    // const PHILogos = importAll(require.context('./Alt_Logos/76ers', false, /\.(png)$/));
    // console.log(PHILogos)

    // BUCKS ALT LOGOS //
    // const MILLogos = importAll(require.context('./Alt_Logos/Bucks', false, /\.(png)$/));
    // console.log(MILLogos)

    // BULLS ALT LOGOS //
    // const CHILogos = importAll(require.context('./Alt_Logos/Bulls', false, /\.(png)$/));
    // console.log(CHILogos)

    // CAVELIERS ALT LOGOS //
    // const CLELogos = importAll(require.context('./Alt_Logos/Caveliers', false, /\.(png)$/));
    // console.log(CLELogos)

    // CELTICS ALT LOGOS //
    // const BOSLogos = importAll(require.context('./Alt_Logos/Celtics', false, /\.(png)$/));
    // console.log(BOSLogos)

    // CLIPPERS ALT LOGOS //
    // const LACLogos = importAll(require.context('./Alt_Logos/Clippers', false, /\.(png)$/));
    // console.log(LACLogos)

    // GRIZZLIES ALT LOGOS //
    // const MEMLogos = importAll(require.context('./Alt_Logos/Grizzlies', false, /\.(png)$/));
    // console.log(MEMLogos)

    // HawkS ALT LOGOS //
    // const ATLLogos = importAll(require.context('./Alt_Logos/Hawks', false, /\.(png)$/));
    // console.log(ATLLogos)

    // Heat ALT LOGOS //
    // const MIALogos = importAll(require.context('./Alt_Logos/Heat', false, /\.(png)$/));
    // console.log(MIALogos)

    // Hornets ALT LOGOS //
    // const CHALogos = importAll(require.context('./Alt_Logos/Hornets', false, /\.(png)$/));
    // console.log(CHALogos)

    // Jazz ALT LOGOS //
    // const UTALogos = importAll(require.context('./Alt_Logos/Jazz', false, /\.(png)$/));
    // console.log(UTALogos)

    // Kings ALT LOGOS //
    // const SACLogos = importAll(require.context('./Alt_Logos/Kings', false, /\.(png)$/));
    // console.log(SACLogos)

    // Knicks ALT LOGOS //
    // const NYKLogos = importAll(require.context('./Alt_Logos/Knicks', false, /\.(png)$/));
    // console.log(NYKLogos)

    // Lakers ALT LOGOS //
    // const LALLogos = importAll(require.context('./Alt_Logos/Lakers', false, /\.(png)$/));
    // console.log(LALLogos)

    // Magic ALT LOGOS //
    // const ORLLogos = importAll(require.context('./Alt_Logos/Magic', false, /\.(png)$/));
    // console.log(ORLLogos)

    // Mavericks ALT LOGOS //
    // const DALLogos = importAll(require.context('./Alt_Logos/Mavericks', false, /\.(png)$/));
    // console.log(DALLogos)

    // Nets ALT LOGOS //
    // const BKNLogos = importAll(require.context('./Alt_Logos/Nets', false, /\.(png)$/));
    // console.log(BKNLogos)

    // Nuggets ALT LOGOS //
    // const DENLogos = importAll(require.context('./Alt_Logos/Nuggets', false, /\.(png)$/));
    // console.log(DENLogos)

    // Pacers ALT LOGOS //
    // const INDLogos = importAll(require.context('./Alt_Logos/Pacers', false, /\.(png)$/));
    // console.log(INDLogos)

    // Pelicans ALT LOGOS //
    // const NOPLogos = importAll(require.context('./Alt_Logos/Pelicans', false, /\.(png)$/));
    // console.log(NOPLogos)

    // Pistons ALT LOGOS //
    // const DETLogos = importAll(require.context('./Alt_Logos/Pistons', false, /\.(png)$/));
    // console.log(DETLogos)

    // Raptors ALT LOGOS //
    // const TORLogos = importAll(require.context('./Alt_Logos/Raptors', false, /\.(png)$/));
    // console.log(TORLogos)

    // Rockets ALT LOGOS //
    // const HOULogos = importAll(require.context('./Alt_Logos/Rockets', false, /\.(png)$/));
    // console.log(HOULogos)

    // Spurs ALT LOGOS //
    // const SASLogos = importAll(require.context('./Alt_Logos/Spurs', false, /\.(png)$/));
    // console.log(SASLogos)

    // Suns ALT LOGOS //
    // const PHXLogos = importAll(require.context('./Alt_Logos/Suns', false, /\.(png)$/));
    // console.log(PHXLogos)

    // Thunder ALT LOGOS //
    // const OKCLogos = importAll(require.context('./Alt_Logos/Thunder', false, /\.(png)$/));
    // console.log(OKCLogos)

    // Timberwolves ALT LOGOS //
    // const MINLogos = importAll(require.context('./Alt_Logos/Timberwolves', false, /\.(png)$/));
    // console.log(MINLogos)

    // TrailBlazer ALT LOGOS //
    // const PORLogos = importAll(require.context('./Alt_Logos/Trail Blazers', false, /\.(png)$/));
    // console.log(PORLogos)

    // Warriors ALT LOGOS //
    // const GSWLogos = importAll(require.context('./Alt_Logos/Warriors', false, /\.(png)$/));
    // console.log(GSWLogos)

    // Wizards ALT LOGOS //
    // const WASLogos = importAll(require.context('./Alt_Logos/Wizards', false, /\.(png)$/));
    // console.log(WASLogos)
      
    // <img src={SixersLogos['doggy.png']} />
    
    // FUNCTION TO SHOW OR HIDE PROPER ALT TEAM LOGOS //
    const toggleShow = () => {
        if (showLogos === true) {
            showLogos = false
        } else {
            showLogos = true
        }
        console.log(showLogos)
    }

    let nameLogo = []
    const showAltLogo = () => {
        console.log(team.name)
        for (let i=0; i < AltTeamLogo.length; i++){
            for(let y=0; y<AltTeamLogo[i].length; y++){
                nameLogo.push(AltTeamLogo[i][y])
                console.log(`${team.name}_[${i}].png`)
            }
            // return (
            //     <Card style={{ width: '18rem' }}>
            //         <Card.Img variant="top" src={require(`./Alt_Logos/${team.name}/${team.name}_[${i}].png`)} />
            //     </Card>
            // )
        }
    }
    // console.log(`${team.name_[i]}.png`)
    const name = showAltLogo()
    // console.log(nameLogo)

    return (
        <div>
            <Button onClick={toggleShow}>Hide/Show Previous Team Logos</Button>
            <div className='AltLogos'>
                {/* {team.name} */}
            {/* <img src={CHILogos['Bulls_0.png']} /> */}
            {/* <img src={require(`./Alt_Logos/${name}`)} /> */}
            {/* {name ? <h1>Nothing</h1> : {name} } */}
            </div>
        </div>
    )
}

export default TeamLogos