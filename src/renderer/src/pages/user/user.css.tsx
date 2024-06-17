import { SPACING_UNIT, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: "24px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: `${SPACING_UNIT * 3}px`,
});

export const profileContentBox = style({
  display: "flex",
  gap: `${SPACING_UNIT + SPACING_UNIT / 2}px`,
  padding: `${SPACING_UNIT * 4}px ${SPACING_UNIT * 2}px`,
  alignItems: "center",
  borderRadius: "4px",
  border: `solid 1px ${vars.color.border}`,
  width: "100%",
  overflow: "hidden",
});

export const profileAvatarContainer = style({
  width: "96px",
  height: "96px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.color.background,
  position: "relative",
  overflow: "hidden",
});

export const profileAvatar = style({
  width: "96px",
  height: "96px",
});

export const profileInformation = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const profileContent = style({
  display: "flex",
  flexDirection: "row",
  gap: `${SPACING_UNIT * 4}px`,
});

export const profileGameSection = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: `${SPACING_UNIT * 2}px`,
});

export const contentSidebar = style({
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      width: "100%",
      maxWidth: "150px",
    },
    "(min-width: 1024px)": {
      maxWidth: "250px",
      width: "100%",
    },
    "(min-width: 1280px)": {
      width: "100%",
      maxWidth: "350px",
    },
  },
});

export const feedGameIcon = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const libraryGameIcon = style({
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const feedItem = style({
  color: vars.color.body,
  display: "flex",
  flexDirection: "row",
  gap: `${SPACING_UNIT * 2}px`,
  width: "100%",
  height: "72px",
  transition: "all ease 0.2s",
  cursor: "pointer",
  zIndex: "1",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
});

export const gameListItem = style({
  color: vars.color.body,
  display: "flex",
  flexDirection: "row",
  gap: `${SPACING_UNIT}px`,
  aspectRatio: "1",
  transition: "all ease 0.2s",
  cursor: "pointer",
  zIndex: "1",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
});

export const gameInformation = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: `${SPACING_UNIT / 2}px`,
});

export const profileHeaderSkeleton = style({
  height: "200px",
});