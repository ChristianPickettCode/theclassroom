/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  admin?: boolean | null,
  lastActive?: string | null,
  createdAt?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  admin?: ModelBooleanInput | null,
  lastActive?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  admin?: boolean | null,
  lastActive?: string | null,
  createdAt?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateRoomInput = {
  id?: string | null,
  name?: string | null,
  group?: string | null,
  accessCode?: string | null,
  createdAt?: string | null,
  roomAdminId?: string | null,
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null,
  group?: ModelStringInput | null,
  accessCode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  group?: string | null,
  accessCode?: string | null,
  createdAt?: string | null,
  roomAdminId?: string | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type CreateChatInput = {
  id?: string | null,
  createdAt?: string | null,
  chatRoomId?: string | null,
};

export type ModelChatConditionInput = {
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
};

export type UpdateChatInput = {
  id: string,
  createdAt?: string | null,
  chatRoomId?: string | null,
};

export type DeleteChatInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  messageUserId?: string | null,
  messageChatId?: string | null,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  messageUserId?: string | null,
  messageChatId?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  admin?: ModelBooleanInput | null,
  lastActive?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  group?: ModelStringInput | null,
  accessCode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    admin: boolean | null,
    lastActive: string | null,
    createdRooms:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    joinedRooms:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    admin: boolean | null,
    lastActive: string | null,
    createdRooms:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    joinedRooms:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    admin: boolean | null,
    lastActive: string | null,
    createdRooms:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    joinedRooms:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    name: string | null,
    group: string | null,
    accessCode: string | null,
    chats:  {
      __typename: "ModelChatConnection",
      items:  Array< {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    admin:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    moderators:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    id: string,
    name: string | null,
    group: string | null,
    accessCode: string | null,
    chats:  {
      __typename: "ModelChatConnection",
      items:  Array< {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    admin:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    moderators:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    id: string,
    name: string | null,
    group: string | null,
    accessCode: string | null,
    chats:  {
      __typename: "ModelChatConnection",
      items:  Array< {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    admin:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    moderators:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat:  {
    __typename: "Chat",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat:  {
    __typename: "Chat",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat:  {
    __typename: "Chat",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    chat:  {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    chat:  {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    chat:  {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    admin: boolean | null,
    lastActive: string | null,
    createdRooms:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    joinedRooms:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    id: string,
    name: string | null,
    group: string | null,
    accessCode: string | null,
    chats:  {
      __typename: "ModelChatConnection",
      items:  Array< {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    admin:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    moderators:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat:  {
    __typename: "Chat",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    chat:  {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      chat:  {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    admin: boolean | null,
    lastActive: string | null,
    createdRooms:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    joinedRooms:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    admin: boolean | null,
    lastActive: string | null,
    createdRooms:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    joinedRooms:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    firstName: string | null,
    lastName: string | null,
    admin: boolean | null,
    lastActive: string | null,
    createdRooms:  {
      __typename: "ModelRoomConnection",
      items:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    joinedRooms:  Array< {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  owner: string,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    name: string | null,
    group: string | null,
    accessCode: string | null,
    chats:  {
      __typename: "ModelChatConnection",
      items:  Array< {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    admin:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    moderators:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  owner: string,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    name: string | null,
    group: string | null,
    accessCode: string | null,
    chats:  {
      __typename: "ModelChatConnection",
      items:  Array< {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    admin:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    moderators:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  owner: string,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    name: string | null,
    group: string | null,
    accessCode: string | null,
    chats:  {
      __typename: "ModelChatConnection",
      items:  Array< {
        __typename: "Chat",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    users:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    admin:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    moderators:  Array< {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  owner: string,
};

export type OnCreateChatSubscription = {
  onCreateChat:  {
    __typename: "Chat",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  owner: string,
};

export type OnUpdateChatSubscription = {
  onUpdateChat:  {
    __typename: "Chat",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  owner: string,
};

export type OnDeleteChatSubscription = {
  onDeleteChat:  {
    __typename: "Chat",
    id: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string | null,
      group: string | null,
      accessCode: string | null,
      chats:  {
        __typename: "ModelChatConnection",
        nextToken: string | null,
      } | null,
      users:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      admin:  {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      moderators:  Array< {
        __typename: "User",
        id: string,
        firstName: string | null,
        lastName: string | null,
        admin: boolean | null,
        lastActive: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  owner: string,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    chat:  {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    chat:  {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      firstName: string | null,
      lastName: string | null,
      admin: boolean | null,
      lastActive: string | null,
      createdRooms:  {
        __typename: "ModelRoomConnection",
        nextToken: string | null,
      } | null,
      joinedRooms:  Array< {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    chat:  {
      __typename: "Chat",
      id: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string | null,
        group: string | null,
        accessCode: string | null,
        createdAt: string | null,
        updatedAt: string,
        owner: string | null,
      } | null,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};
