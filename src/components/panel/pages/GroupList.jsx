import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { toTitleCase } from "../../../utils/tools";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function GroupList() {
  const { groups, users } = useSelector((data) => data.mainSlice);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "center",
        height: "70vh",
        maxHeight: "70vh",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {groups.map((group, index) => (
          <Tab label={toTitleCase(group.name)} {...a11yProps(index)} />
        ))}
      </Tabs>
      {groups.map((group, index) => (
        <TabPanel value={value} index={index} sx={{ width: "100%" }}>
          Memebers
          <List
            sx={{
              width: "600px",
              maxWidth: "52vw !important",
              maxHeight: "70vh",
              overflowY: "scroll",
              bgcolor: "background.paper",
            }}
          >
            {users
              .filter((user) =>
                user.group.find(
                  (el) => el.toLowerCase() == group.name.toLowerCase()
                )
              )
              .map((item) => {
                return (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={item.firstName} src={item.pic} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={toTitleCase(
                          item.firstName + " " + item.lastName
                        )}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "block" }}
                              component="p"
                              variant="body2"
                              color="text.primary"
                            >
                              {toTitleCase(item.role)}
                            </Typography>
                            {item.email}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })}
          </List>
        </TabPanel>
      ))}
    </Box>
  );
}
