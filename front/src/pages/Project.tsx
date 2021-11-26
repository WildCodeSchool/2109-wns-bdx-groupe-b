import React, { useState, useEffect, Fragment } from 'react'
import { COLORS } from '../assets/colors';
import Label from '../components/Label';
import AvatarGroup from '../components/AvatarGroup' 

import {
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    Checkbox,
    Menu,
    Text,
  MenuButton,
  MenuList,
  MenuItem,
  } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons';

  import {
    useQuery,
    gql
  } from "@apollo/client";

  import styled from "styled-components"
  import { GetProjects } from "../GetProject";
import Labels from '../components/Label';
import Avatar from "../components/Avatar";

  const GET_PROJECTS = gql`
  query GetProjects {
    posts {
      data {
        id
        title
        body
      }
    }
  }
`;



export default function Projects() {
    const [projects, setProjects] = React.useState<string[]>([]);
    const { data } = useQuery<GetProjects>(GET_PROJECTS);

    const users =  [
      {
        "name" : "Corentin Lecoeur",
      },
      {
        "name" : "Geffrey Freydas",
      },
      {
        "name" : "Marion Freydas",
      },
    ]


    return (
          <Fragment>
               <Label text="label" />
               <AvatarGroup users={users} />

            
          </Fragment>
    )
}
