# `gitCredential` Submodule <a name="`gitCredential` Submodule" id="@cdktn/provider-databricks.gitCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitCredential <a name="GitCredential" id="@cdktn/provider-databricks.gitCredential.GitCredential"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential databricks_git_credential}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredential(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  git_provider: str,
  force: bool | IResolvable = None,
  git_email: str = None,
  git_username: str = None,
  id: str = None,
  is_default_for_provider: bool | IResolvable = None,
  name: str = None,
  personal_access_token: str = None,
  principal_id: typing.Union[int, float] = None,
  provider_config: GitCredentialProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.gitProvider">git_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_provider GitCredential#git_provider}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#force GitCredential#force}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.gitEmail">git_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_email GitCredential#git_email}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.gitUsername">git_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_username GitCredential#git_username}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#id GitCredential#id}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.isDefaultForProvider">is_default_for_provider</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#is_default_for_provider GitCredential#is_default_for_provider}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#name GitCredential#name}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.personalAccessToken">personal_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#personal_access_token GitCredential#personal_access_token}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#principal_id GitCredential#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a></code> | provider_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `git_provider`<sup>Required</sup> <a name="git_provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.gitProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_provider GitCredential#git_provider}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.force"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#force GitCredential#force}.

---

##### `git_email`<sup>Optional</sup> <a name="git_email" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.gitEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_email GitCredential#git_email}.

---

##### `git_username`<sup>Optional</sup> <a name="git_username" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.gitUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_username GitCredential#git_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#id GitCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default_for_provider`<sup>Optional</sup> <a name="is_default_for_provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.isDefaultForProvider"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#is_default_for_provider GitCredential#is_default_for_provider}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#name GitCredential#name}.

---

##### `personal_access_token`<sup>Optional</sup> <a name="personal_access_token" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.personalAccessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#personal_access_token GitCredential#personal_access_token}.

---

##### `principal_id`<sup>Optional</sup> <a name="principal_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.principalId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#principal_id GitCredential#principal_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.gitCredential.GitCredential.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#provider_config GitCredential#provider_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetGitEmail">reset_git_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetGitUsername">reset_git_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetIsDefaultForProvider">reset_is_default_for_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetPersonalAccessToken">reset_personal_access_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetPrincipalId">reset_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.gitCredential.GitCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.gitCredential.GitCredential.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.gitCredential.GitCredential.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.gitCredential.GitCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.gitCredential.GitCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.gitCredential.GitCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.gitCredential.GitCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.gitCredential.GitCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.gitCredential.GitCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.gitCredential.GitCredential.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.gitCredential.GitCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.gitCredential.GitCredential.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.gitCredential.GitCredential.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.gitCredential.GitCredential.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.gitCredential.GitCredential.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.gitCredential.GitCredential.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#workspace_id GitCredential#workspace_id}.

---

##### `reset_force` <a name="reset_force" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_git_email` <a name="reset_git_email" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetGitEmail"></a>

```python
def reset_git_email() -> None
```

##### `reset_git_username` <a name="reset_git_username" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetGitUsername"></a>

```python
def reset_git_username() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default_for_provider` <a name="reset_is_default_for_provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetIsDefaultForProvider"></a>

```python
def reset_is_default_for_provider() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_personal_access_token` <a name="reset_personal_access_token" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetPersonalAccessToken"></a>

```python
def reset_personal_access_token() -> None
```

##### `reset_principal_id` <a name="reset_principal_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetPrincipalId"></a>

```python
def reset_principal_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.gitCredential.GitCredential.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GitCredential resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.gitCredential.GitCredential.isConstruct"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredential.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.gitCredential.GitCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformElement"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformResource"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredential.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.gitCredential.GitCredential.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GitCredential resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GitCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GitCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GitCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference">GitCredentialProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.forceInput">force_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmailInput">git_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProviderInput">git_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsernameInput">git_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProviderInput">is_default_for_provider_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessTokenInput">personal_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.principalIdInput">principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmail">git_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProvider">git_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsername">git_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProvider">is_default_for_provider</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessToken">personal_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfig"></a>

```python
provider_config: GitCredentialProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference">GitCredentialProviderConfigOutputReference</a>

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.forceInput"></a>

```python
force_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `git_email_input`<sup>Optional</sup> <a name="git_email_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmailInput"></a>

```python
git_email_input: str
```

- *Type:* str

---

##### `git_provider_input`<sup>Optional</sup> <a name="git_provider_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProviderInput"></a>

```python
git_provider_input: str
```

- *Type:* str

---

##### `git_username_input`<sup>Optional</sup> <a name="git_username_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsernameInput"></a>

```python
git_username_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_for_provider_input`<sup>Optional</sup> <a name="is_default_for_provider_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProviderInput"></a>

```python
is_default_for_provider_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `personal_access_token_input`<sup>Optional</sup> <a name="personal_access_token_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessTokenInput"></a>

```python
personal_access_token_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.principalIdInput"></a>

```python
principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.providerConfigInput"></a>

```python
provider_config_input: GitCredentialProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `git_email`<sup>Required</sup> <a name="git_email" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitEmail"></a>

```python
git_email: str
```

- *Type:* str

---

##### `git_provider`<sup>Required</sup> <a name="git_provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitProvider"></a>

```python
git_provider: str
```

- *Type:* str

---

##### `git_username`<sup>Required</sup> <a name="git_username" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.gitUsername"></a>

```python
git_username: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default_for_provider`<sup>Required</sup> <a name="is_default_for_provider" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.isDefaultForProvider"></a>

```python
is_default_for_provider: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `personal_access_token`<sup>Required</sup> <a name="personal_access_token" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.personalAccessToken"></a>

```python
personal_access_token: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.gitCredential.GitCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GitCredentialConfig <a name="GitCredentialConfig" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.Initializer"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredentialConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  git_provider: str,
  force: bool | IResolvable = None,
  git_email: str = None,
  git_username: str = None,
  id: str = None,
  is_default_for_provider: bool | IResolvable = None,
  name: str = None,
  personal_access_token: str = None,
  principal_id: typing.Union[int, float] = None,
  provider_config: GitCredentialProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitProvider">git_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_provider GitCredential#git_provider}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#force GitCredential#force}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitEmail">git_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_email GitCredential#git_email}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitUsername">git_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_username GitCredential#git_username}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#id GitCredential#id}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.isDefaultForProvider">is_default_for_provider</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#is_default_for_provider GitCredential#is_default_for_provider}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#name GitCredential#name}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.personalAccessToken">personal_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#personal_access_token GitCredential#personal_access_token}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#principal_id GitCredential#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `git_provider`<sup>Required</sup> <a name="git_provider" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitProvider"></a>

```python
git_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_provider GitCredential#git_provider}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#force GitCredential#force}.

---

##### `git_email`<sup>Optional</sup> <a name="git_email" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitEmail"></a>

```python
git_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_email GitCredential#git_email}.

---

##### `git_username`<sup>Optional</sup> <a name="git_username" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.gitUsername"></a>

```python
git_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#git_username GitCredential#git_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#id GitCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default_for_provider`<sup>Optional</sup> <a name="is_default_for_provider" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.isDefaultForProvider"></a>

```python
is_default_for_provider: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#is_default_for_provider GitCredential#is_default_for_provider}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#name GitCredential#name}.

---

##### `personal_access_token`<sup>Optional</sup> <a name="personal_access_token" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.personalAccessToken"></a>

```python
personal_access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#personal_access_token GitCredential#personal_access_token}.

---

##### `principal_id`<sup>Optional</sup> <a name="principal_id" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#principal_id GitCredential#principal_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.gitCredential.GitCredentialConfig.property.providerConfig"></a>

```python
provider_config: GitCredentialProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#provider_config GitCredential#provider_config}

---

### GitCredentialProviderConfig <a name="GitCredentialProviderConfig" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredentialProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#workspace_id GitCredential#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/git_credential#workspace_id GitCredential#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GitCredentialProviderConfigOutputReference <a name="GitCredentialProviderConfigOutputReference" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import git_credential

gitCredential.GitCredentialProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: GitCredentialProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.gitCredential.GitCredentialProviderConfig">GitCredentialProviderConfig</a>

---



