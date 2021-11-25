import React, { useState, useEffect } from 'react'
import { COLORS } from '../assets/colors';
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


    return (
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>
                            <Checkbox defaultIsChecked />
                        </Th>
                        <Th>Désignation</Th>
                        <Th>Statut</Th>
                        <Th>Avancement</Th>
                        <Th>Date</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.projects.map((item) => {
                        <Tr>
                            <Td><Checkbox /></Td>
                            <Td>dd</Td>
                            <Td>centimetres (cm)</Td>

                        </Tr>
                    })}
                </Tbody>
                </Table>
    )
}
