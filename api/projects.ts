import { axios } from "./axios";
import { Project, ProjectStatus } from "./projects.types";

const ENDPOINT = "/project";

export async function getProjects() {
  const { data } = await axios.get<Project[]>(ENDPOINT);

  const mappedData = data.map((project) => ({
    ...project,
    status: mapProjectStatus(
      project.status as keyof typeof ApiResponseStatuses,
    ),
  }));

  return mappedData;
}

const ApiStatusToEnum = {
  info: ProjectStatus.stable,
  warning: ProjectStatus.warning,
  error: ProjectStatus.critical,
};

const ApiResponseStatuses = {
  info: "info",
  warning: "warning",
  error: "error",
};

const mapProjectStatus = (
  status: keyof typeof ApiResponseStatuses,
): ProjectStatus => {
  return ApiStatusToEnum[status] || ProjectStatus.critical;
};
