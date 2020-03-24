import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Box, ListSubheader } from "@material-ui/core";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import PeopleIcon from '@material-ui/icons/People';
import ShareIcon from '@material-ui/icons/Share';
import GroupAddIcon from '@material-ui/icons/GroupAdd';



class PrimaryList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    renderButton(title) {
        var icon
            
        if (title === "Music") {
            icon = <MusicNoteIcon/>
        } else if (title === "Concerts") {
            icon = <AlbumIcon/>
        } else if (title === "People") {
            icon = <GroupAddIcon/>
        } else if (title === "Shared With Me") {
            icon = <ShareIcon/>
        }
        
        return ( 
            <ListItem button key = {title} onClick = {(event) => this.props.handleSelection(event,title)} selected = {this.props.selectedTag === title}> 
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary = {title}/>
            </ListItem>
        )
    }

    renderButtons() {
        let buttons = this.props.primaryTags.map(title => this.renderButton(title));
        
        return buttons;
    }

    render () {
        return (
            <List component="nav" aria-label="main list" style = {{flexGrow : 1}}>
                <ListSubheader style = {{textAlign : "center", paddingBottom: "2%"}}>
                    <ListItemText primary = "Discover"/>
                </ListSubheader>
                <Divider/>                
                {this.renderButtons()}
            </List>
        )
    }   
}

class SecondaryList extends React.Component {
    render () {
        return (
            <Box>
                <Divider />
                <List component="nav" aria-label="secondary list">
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Your Connections" />
                    </ListItem>
                </List>
            </Box>
        )
    }  
}

export {PrimaryList, SecondaryList}