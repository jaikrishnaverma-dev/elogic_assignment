import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GroupsIcon from '@mui/icons-material/Groups';
import Typography from '@mui/material/Typography';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
export default function Details() {
    const features=[
        {
            icon:<GppGoodIcon/>,
            title:"Authentication",
            desc:["Login","Registration","Log Out"],
            color:"warning"
        },
        {
            icon:<ManageAccountsIcon/>,
            title:"Manage Users",
            desc:["Create User","Edit User"],
            color:"warning"
        },
        {
            icon:<GroupsIcon/>,
            title:"Group",
            desc:["Create Group","Group Wise Listing"],
            color:"warning"
        },   {
            icon:<AssignmentIndIcon/>,
            title:"Profile",
            desc:["View","Update"],
            color:"warning"
        }
    ]
  return (
    <Timeline position="alternate">
        {
            features.map((feature,index)=>{
                return       <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0',color:"#FFFF" }}
                  align="right"
                  variant="body2"
                  color="text.primary"
                >
                 Feature {index+1}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot variant='filled' color={feature.color} sx={{color:"#FFFF"}}>
                    {feature.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, width:300 }}>
                  <Typography variant="h6" component="span" color={"#FFFF"}>
                 {feature.title}
                  </Typography>
                  {
                    feature.desc.map((desc,i)=> <Typography color={"#FFFF"}>{(i+1)+". "+desc}</Typography>)
                  }
                </TimelineContent>
              </TimelineItem>
            })
        }

    </Timeline>
  );
}