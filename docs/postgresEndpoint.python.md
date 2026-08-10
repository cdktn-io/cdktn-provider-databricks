# `postgresEndpoint` Submodule <a name="`postgresEndpoint` Submodule" id="@cdktn/provider-databricks.postgresEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresEndpoint <a name="PostgresEndpoint" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint databricks_postgres_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_id: str,
  parent: str,
  provider_config: PostgresEndpointProviderConfig = None,
  replace_existing: bool | IResolvable = None,
  spec: PostgresEndpointSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#endpoint_id PostgresEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#parent PostgresEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#provider_config PostgresEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.replaceExisting">replace_existing</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#replace_existing PostgresEndpoint#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#spec PostgresEndpoint#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#endpoint_id PostgresEndpoint#endpoint_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#parent PostgresEndpoint#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#provider_config PostgresEndpoint#provider_config}.

---

##### `replace_existing`<sup>Optional</sup> <a name="replace_existing" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.replaceExisting"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#replace_existing PostgresEndpoint#replace_existing}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#spec PostgresEndpoint#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetReplaceExisting">reset_replace_existing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetSpec">reset_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#workspace_id PostgresEndpoint#workspace_id}.

---

##### `put_spec` <a name="put_spec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec"></a>

```python
def put_spec(
  endpoint_type: str,
  autoscaling_limit_max_cu: typing.Union[int, float] = None,
  autoscaling_limit_min_cu: typing.Union[int, float] = None,
  disabled: bool | IResolvable = None,
  group: PostgresEndpointSpecGroup = None,
  no_suspension: bool | IResolvable = None,
  settings: PostgresEndpointSpecSettings = None,
  suspend_timeout_duration: str = None
) -> None
```

###### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#endpoint_type PostgresEndpoint#endpoint_type}.

---

###### `autoscaling_limit_max_cu`<sup>Optional</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.autoscalingLimitMaxCu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#autoscaling_limit_max_cu PostgresEndpoint#autoscaling_limit_max_cu}.

---

###### `autoscaling_limit_min_cu`<sup>Optional</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.autoscalingLimitMinCu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#autoscaling_limit_min_cu PostgresEndpoint#autoscaling_limit_min_cu}.

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#disabled PostgresEndpoint#disabled}.

---

###### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.group"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#group PostgresEndpoint#group}.

---

###### `no_suspension`<sup>Optional</sup> <a name="no_suspension" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.noSuspension"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#no_suspension PostgresEndpoint#no_suspension}.

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#settings PostgresEndpoint#settings}.

---

###### `suspend_timeout_duration`<sup>Optional</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.suspendTimeoutDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#suspend_timeout_duration PostgresEndpoint#suspend_timeout_duration}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_replace_existing` <a name="reset_replace_existing" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetReplaceExisting"></a>

```python
def reset_replace_existing() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetSpec"></a>

```python
def reset_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PostgresEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isConstruct"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PostgresEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference">PostgresEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference">PostgresEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference">PostgresEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExistingInput">replace_existing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExisting">replace_existing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfig"></a>

```python
provider_config: PostgresEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference">PostgresEndpointProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.spec"></a>

```python
spec: PostgresEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference">PostgresEndpointSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.status"></a>

```python
status: PostgresEndpointStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference">PostgresEndpointStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | PostgresEndpointProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a>

---

##### `replace_existing_input`<sup>Optional</sup> <a name="replace_existing_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExistingInput"></a>

```python
replace_existing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.specInput"></a>

```python
spec_input: IResolvable | PostgresEndpointSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a>

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `replace_existing`<sup>Required</sup> <a name="replace_existing" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExisting"></a>

```python
replace_existing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresEndpointConfig <a name="PostgresEndpointConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_id: str,
  parent: str,
  provider_config: PostgresEndpointProviderConfig = None,
  replace_existing: bool | IResolvable = None,
  spec: PostgresEndpointSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#endpoint_id PostgresEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#parent PostgresEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#provider_config PostgresEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.replaceExisting">replace_existing</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#replace_existing PostgresEndpoint#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#spec PostgresEndpoint#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#endpoint_id PostgresEndpoint#endpoint_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#parent PostgresEndpoint#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.providerConfig"></a>

```python
provider_config: PostgresEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#provider_config PostgresEndpoint#provider_config}.

---

##### `replace_existing`<sup>Optional</sup> <a name="replace_existing" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.replaceExisting"></a>

```python
replace_existing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#replace_existing PostgresEndpoint#replace_existing}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.spec"></a>

```python
spec: PostgresEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#spec PostgresEndpoint#spec}.

---

### PostgresEndpointProviderConfig <a name="PostgresEndpointProviderConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#workspace_id PostgresEndpoint#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#workspace_id PostgresEndpoint#workspace_id}.

---

### PostgresEndpointSpec <a name="PostgresEndpointSpec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointSpec(
  endpoint_type: str,
  autoscaling_limit_max_cu: typing.Union[int, float] = None,
  autoscaling_limit_min_cu: typing.Union[int, float] = None,
  disabled: bool | IResolvable = None,
  group: PostgresEndpointSpecGroup = None,
  no_suspension: bool | IResolvable = None,
  settings: PostgresEndpointSpecSettings = None,
  suspend_timeout_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#endpoint_type PostgresEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#autoscaling_limit_max_cu PostgresEndpoint#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#autoscaling_limit_min_cu PostgresEndpoint#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#disabled PostgresEndpoint#disabled}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#group PostgresEndpoint#group}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#no_suspension PostgresEndpoint#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#settings PostgresEndpoint#settings}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#suspend_timeout_duration PostgresEndpoint#suspend_timeout_duration}. |

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#endpoint_type PostgresEndpoint#endpoint_type}.

---

##### `autoscaling_limit_max_cu`<sup>Optional</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#autoscaling_limit_max_cu PostgresEndpoint#autoscaling_limit_max_cu}.

---

##### `autoscaling_limit_min_cu`<sup>Optional</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#autoscaling_limit_min_cu PostgresEndpoint#autoscaling_limit_min_cu}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#disabled PostgresEndpoint#disabled}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.group"></a>

```python
group: PostgresEndpointSpecGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#group PostgresEndpoint#group}.

---

##### `no_suspension`<sup>Optional</sup> <a name="no_suspension" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#no_suspension PostgresEndpoint#no_suspension}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.settings"></a>

```python
settings: PostgresEndpointSpecSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#settings PostgresEndpoint#settings}.

---

##### `suspend_timeout_duration`<sup>Optional</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#suspend_timeout_duration PostgresEndpoint#suspend_timeout_duration}.

---

### PostgresEndpointSpecGroup <a name="PostgresEndpointSpecGroup" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointSpecGroup(
  max: typing.Union[int, float],
  min: typing.Union[int, float],
  enable_readable_secondaries: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#max PostgresEndpoint#max}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#min PostgresEndpoint#min}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#enable_readable_secondaries PostgresEndpoint#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#max PostgresEndpoint#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#min PostgresEndpoint#min}.

---

##### `enable_readable_secondaries`<sup>Optional</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#enable_readable_secondaries PostgresEndpoint#enable_readable_secondaries}.

---

### PostgresEndpointSpecSettings <a name="PostgresEndpointSpecSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointSpecSettings(
  pg_settings: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}. |

---

##### `pg_settings`<sup>Optional</sup> <a name="pg_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}.

---

### PostgresEndpointStatus <a name="PostgresEndpointStatus" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatus()
```


### PostgresEndpointStatusGroup <a name="PostgresEndpointStatusGroup" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatusGroup(
  max: typing.Union[int, float],
  min: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#max PostgresEndpoint#max}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#min PostgresEndpoint#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#max PostgresEndpoint#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#min PostgresEndpoint#min}.

---

### PostgresEndpointStatusHosts <a name="PostgresEndpointStatusHosts" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatusHosts()
```


### PostgresEndpointStatusSettings <a name="PostgresEndpointStatusSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatusSettings(
  pg_settings: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}. |

---

##### `pg_settings`<sup>Optional</sup> <a name="pg_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresEndpointProviderConfigOutputReference <a name="PostgresEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresEndpointProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a>

---


### PostgresEndpointSpecGroupOutputReference <a name="PostgresEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointSpecGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">reset_enable_readable_secondaries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_readable_secondaries` <a name="reset_enable_readable_secondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```python
def reset_enable_readable_secondaries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">enable_readable_secondaries_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_readable_secondaries_input`<sup>Optional</sup> <a name="enable_readable_secondaries_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```python
enable_readable_secondaries_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_readable_secondaries`<sup>Required</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresEndpointSpecGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a>

---


### PostgresEndpointSpecOutputReference <a name="PostgresEndpointSpecOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup">put_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMaxCu">reset_autoscaling_limit_max_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMinCu">reset_autoscaling_limit_min_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetNoSuspension">reset_no_suspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSuspendTimeoutDuration">reset_suspend_timeout_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group` <a name="put_group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup"></a>

```python
def put_group(
  max: typing.Union[int, float],
  min: typing.Union[int, float],
  enable_readable_secondaries: bool | IResolvable = None
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#max PostgresEndpoint#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#min PostgresEndpoint#min}.

---

###### `enable_readable_secondaries`<sup>Optional</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup.parameter.enableReadableSecondaries"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#enable_readable_secondaries PostgresEndpoint#enable_readable_secondaries}.

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putSettings"></a>

```python
def put_settings(
  pg_settings: typing.Mapping[str] = None
) -> None
```

###### `pg_settings`<sup>Optional</sup> <a name="pg_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putSettings.parameter.pgSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}.

---

##### `reset_autoscaling_limit_max_cu` <a name="reset_autoscaling_limit_max_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```python
def reset_autoscaling_limit_max_cu() -> None
```

##### `reset_autoscaling_limit_min_cu` <a name="reset_autoscaling_limit_min_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```python
def reset_autoscaling_limit_min_cu() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_no_suspension` <a name="reset_no_suspension" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetNoSuspension"></a>

```python
def reset_no_suspension() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_suspend_timeout_duration` <a name="reset_suspend_timeout_duration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSuspendTimeoutDuration"></a>

```python
def reset_suspend_timeout_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference">PostgresEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference">PostgresEndpointSpecSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput">autoscaling_limit_max_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCuInput">autoscaling_limit_min_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.groupInput">group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspensionInput">no_suspension_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDurationInput">suspend_timeout_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.group"></a>

```python
group: PostgresEndpointSpecGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference">PostgresEndpointSpecGroupOutputReference</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settings"></a>

```python
settings: PostgresEndpointSpecSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference">PostgresEndpointSpecSettingsOutputReference</a>

---

##### `autoscaling_limit_max_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_max_cu_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```python
autoscaling_limit_max_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_min_cu_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```python
autoscaling_limit_min_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.groupInput"></a>

```python
group_input: IResolvable | PostgresEndpointSpecGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a>

---

##### `no_suspension_input`<sup>Optional</sup> <a name="no_suspension_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspensionInput"></a>

```python
no_suspension_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | PostgresEndpointSpecSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a>

---

##### `suspend_timeout_duration_input`<sup>Optional</sup> <a name="suspend_timeout_duration_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```python
suspend_timeout_duration_input: str
```

- *Type:* str

---

##### `autoscaling_limit_max_cu`<sup>Required</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu`<sup>Required</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `no_suspension`<sup>Required</sup> <a name="no_suspension" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `suspend_timeout_duration`<sup>Required</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresEndpointSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a>

---


### PostgresEndpointSpecSettingsOutputReference <a name="PostgresEndpointSpecSettingsOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointSpecSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resetPgSettings">reset_pg_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pg_settings` <a name="reset_pg_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resetPgSettings"></a>

```python
def reset_pg_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettingsInput">pg_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pg_settings_input`<sup>Optional</sup> <a name="pg_settings_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettingsInput"></a>

```python
pg_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pg_settings`<sup>Required</sup> <a name="pg_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresEndpointSpecSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a>

---


### PostgresEndpointStatusGroupOutputReference <a name="PostgresEndpointStatusGroupOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatusGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup">PostgresEndpointStatusGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_readable_secondaries`<sup>Required</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.internalValue"></a>

```python
internal_value: PostgresEndpointStatusGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup">PostgresEndpointStatusGroup</a>

---


### PostgresEndpointStatusHostsOutputReference <a name="PostgresEndpointStatusHostsOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatusHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readOnlyHost">read_only_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readOnlyPooledHost">read_only_pooled_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readWritePooledHost">read_write_pooled_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts">PostgresEndpointStatusHosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `read_only_host`<sup>Required</sup> <a name="read_only_host" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readOnlyHost"></a>

```python
read_only_host: str
```

- *Type:* str

---

##### `read_only_pooled_host`<sup>Required</sup> <a name="read_only_pooled_host" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readOnlyPooledHost"></a>

```python
read_only_pooled_host: str
```

- *Type:* str

---

##### `read_write_pooled_host`<sup>Required</sup> <a name="read_write_pooled_host" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readWritePooledHost"></a>

```python
read_write_pooled_host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.internalValue"></a>

```python
internal_value: PostgresEndpointStatusHosts
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts">PostgresEndpointStatusHosts</a>

---


### PostgresEndpointStatusOutputReference <a name="PostgresEndpointStatusOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.currentState">current_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference">PostgresEndpointStatusGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.hosts">hosts</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference">PostgresEndpointStatusHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.lastActiveTime">last_active_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.pendingState">pending_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference">PostgresEndpointStatusSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus">PostgresEndpointStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_limit_max_cu`<sup>Required</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu`<sup>Required</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_state`<sup>Required</sup> <a name="current_state" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.currentState"></a>

```python
current_state: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.group"></a>

```python
group: PostgresEndpointStatusGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference">PostgresEndpointStatusGroupOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.hosts"></a>

```python
hosts: PostgresEndpointStatusHostsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference">PostgresEndpointStatusHostsOutputReference</a>

---

##### `last_active_time`<sup>Required</sup> <a name="last_active_time" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.lastActiveTime"></a>

```python
last_active_time: str
```

- *Type:* str

---

##### `pending_state`<sup>Required</sup> <a name="pending_state" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.pendingState"></a>

```python
pending_state: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.settings"></a>

```python
settings: PostgresEndpointStatusSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference">PostgresEndpointStatusSettingsOutputReference</a>

---

##### `suspend_timeout_duration`<sup>Required</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.internalValue"></a>

```python
internal_value: PostgresEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus">PostgresEndpointStatus</a>

---


### PostgresEndpointStatusSettingsOutputReference <a name="PostgresEndpointStatusSettingsOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_endpoint

postgresEndpoint.PostgresEndpointStatusSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resetPgSettings">reset_pg_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pg_settings` <a name="reset_pg_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resetPgSettings"></a>

```python
def reset_pg_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettingsInput">pg_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings">PostgresEndpointStatusSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pg_settings_input`<sup>Optional</sup> <a name="pg_settings_input" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettingsInput"></a>

```python
pg_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pg_settings`<sup>Required</sup> <a name="pg_settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.internalValue"></a>

```python
internal_value: PostgresEndpointStatusSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings">PostgresEndpointStatusSettings</a>

---



