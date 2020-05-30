import React from 'react';
import {Icon, Typography, Paper, IconButton, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';


function widget(props)
{
    const user =  {
        'avatar' : "assets/images/avatars/alice.jpg",
        'firstName' : "alice"
    };

    return (
        <Paper 
            className="w-full rounded-8 shadow-none border-1" 
            style={{
                width: 150,
                heigh: 150
            }}
        >
            {/* <div className="flex items-center justify-between pr-4 pl-16 pt-4">
                <Typography className="text-16">{props.widget.title}</Typography>
                <IconButton aria-label="more">
                    <Icon>more_vert</Icon>
                </IconButton>
            </div> */}
            <div 
                className="text-center pt-12 pb-28"
                style={{
                    'justify-content': 'center',
                    display: 'flex'
                }}
            >
                {/* <Typography
                    className="leading-none text-red">{props.widget.title}</Typography> */}
                <Typography className="text-16" color="textSecondary">
                    <Avatar 
                        src={user.avatar} 
                        alt={user.firstName} 
                        className="w-40 h-40"                        
                    >
                        {(!user.avatar || user.avatar === '') ? user.firstName : ''}
                    </Avatar>            
                </Typography>
            </div>
            <div className="flex items-center px-16 h-52 border-t-1">
                <Typography className="text-15 flex w-full" color="textSecondary">
                    <span className="truncate">{props.widget.title}</span>
                    :
                    <b className="pl-8">{props.widget.title}</b>
                </Typography>
            </div>
        </Paper>
    );
}

export default React.memo(widget);
