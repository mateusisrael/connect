import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 8px 12px;
  background-color: #F7F7FC;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  min-width: 350px;
  
  
  cursor: pointer;
`

type ProfileImgProps = {
  profilePhotoURL?: string;
}

export const ProfileImg = styled.div<ProfileImgProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  ${({ profilePhotoURL }) => profilePhotoURL ? css`
    background: no-repeat center url('profilePhoto');
  ` : css`
    background: no-repeat center url('./no-profile-photo.svg');
  `}
  
  background-color: var(--neutral-line);

  .name {
    font-size: .5rem;
  }
`

export const TextsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;

  .name {
    font-size: 1rem;
  }

  .contact {
    font-size: 1rem;
    color: var(--neutral-disabled);
  }
`