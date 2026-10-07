# `privateNetworkGateway` Submodule <a name="`privateNetworkGateway` Submodule" id="@cdktn/provider-databricks.privateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNetworkGateway <a name="PrivateNetworkGateway" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  parent: str,
  traffic_mode: str,
  aws_cloud_connection: PrivateNetworkGatewayAwsCloudConnection = None,
  azure_cloud_connection: PrivateNetworkGatewayAzureCloudConnection = None,
  bandwidth_tier_gigabits_per_second: typing.Union[int, float] = None,
  destinations: IResolvable | typing.List[PrivateNetworkGatewayDestinations] = None,
  private_dns_resolvers: IResolvable | typing.List[PrivateNetworkGatewayPrivateDnsResolvers] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.trafficMode">traffic_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.awsCloudConnection">aws_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.azureCloudConnection">azure_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.bandwidthTierGigabitsPerSecond">bandwidth_tier_gigabits_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.privateDnsResolvers">private_dns_resolvers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}.

---

##### `traffic_mode`<sup>Required</sup> <a name="traffic_mode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.trafficMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}.

---

##### `aws_cloud_connection`<sup>Optional</sup> <a name="aws_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.awsCloudConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}.

---

##### `azure_cloud_connection`<sup>Optional</sup> <a name="azure_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.azureCloudConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}.

---

##### `bandwidth_tier_gigabits_per_second`<sup>Optional</sup> <a name="bandwidth_tier_gigabits_per_second" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.bandwidthTierGigabitsPerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.destinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}.

---

##### `private_dns_resolvers`<sup>Optional</sup> <a name="private_dns_resolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.privateDnsResolvers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection">put_aws_cloud_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection">put_azure_cloud_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers">put_private_dns_resolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection">reset_aws_cloud_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection">reset_azure_cloud_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond">reset_bandwidth_tier_gigabits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers">reset_private_dns_resolvers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_cloud_connection` <a name="put_aws_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection"></a>

```python
def put_aws_cloud_connection(
  cross_account_role: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole,
  gateway_subnets: IResolvable | typing.List[PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets],
  security_group_ids: typing.List[str]
) -> None
```

###### `cross_account_role`<sup>Required</sup> <a name="cross_account_role" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection.parameter.crossAccountRole"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}.

---

###### `gateway_subnets`<sup>Required</sup> <a name="gateway_subnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection.parameter.gatewaySubnets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}.

---

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}.

---

##### `put_azure_cloud_connection` <a name="put_azure_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection"></a>

```python
def put_azure_cloud_connection(
  gateway_subnet: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
) -> None
```

###### `gateway_subnet`<sup>Required</sup> <a name="gateway_subnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection.parameter.gatewaySubnet"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}.

---

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[PrivateNetworkGatewayDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]

---

##### `put_private_dns_resolvers` <a name="put_private_dns_resolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers"></a>

```python
def put_private_dns_resolvers(
  value: IResolvable | typing.List[PrivateNetworkGatewayPrivateDnsResolvers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]

---

##### `reset_aws_cloud_connection` <a name="reset_aws_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection"></a>

```python
def reset_aws_cloud_connection() -> None
```

##### `reset_azure_cloud_connection` <a name="reset_azure_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection"></a>

```python
def reset_azure_cloud_connection() -> None
```

##### `reset_bandwidth_tier_gigabits_per_second` <a name="reset_bandwidth_tier_gigabits_per_second" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond"></a>

```python
def reset_bandwidth_tier_gigabits_per_second() -> None
```

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_private_dns_resolvers` <a name="reset_private_dns_resolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers"></a>

```python
def reset_private_dns_resolvers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateNetworkGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection">aws_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection">azure_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers">private_dns_resolvers</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput">aws_cloud_connection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput">azure_cloud_connection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput">bandwidth_tier_gigabits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput">private_dns_resolvers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput">traffic_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">bandwidth_tier_gigabits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode">traffic_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_cloud_connection`<sup>Required</sup> <a name="aws_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection"></a>

```python
aws_cloud_connection: PrivateNetworkGatewayAwsCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `azure_cloud_connection`<sup>Required</sup> <a name="azure_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection"></a>

```python
azure_cloud_connection: PrivateNetworkGatewayAzureCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations"></a>

```python
destinations: PrivateNetworkGatewayDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_dns_resolvers`<sup>Required</sup> <a name="private_dns_resolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers"></a>

```python
private_dns_resolvers: PrivateNetworkGatewayPrivateDnsResolversList
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `aws_cloud_connection_input`<sup>Optional</sup> <a name="aws_cloud_connection_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput"></a>

```python
aws_cloud_connection_input: IResolvable | PrivateNetworkGatewayAwsCloudConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `azure_cloud_connection_input`<sup>Optional</sup> <a name="azure_cloud_connection_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput"></a>

```python
azure_cloud_connection_input: IResolvable | PrivateNetworkGatewayAzureCloudConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `bandwidth_tier_gigabits_per_second_input`<sup>Optional</sup> <a name="bandwidth_tier_gigabits_per_second_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput"></a>

```python
bandwidth_tier_gigabits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[PrivateNetworkGatewayDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `private_dns_resolvers_input`<sup>Optional</sup> <a name="private_dns_resolvers_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput"></a>

```python
private_dns_resolvers_input: IResolvable | typing.List[PrivateNetworkGatewayPrivateDnsResolvers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]

---

##### `traffic_mode_input`<sup>Optional</sup> <a name="traffic_mode_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput"></a>

```python
traffic_mode_input: str
```

- *Type:* str

---

##### `bandwidth_tier_gigabits_per_second`<sup>Required</sup> <a name="bandwidth_tier_gigabits_per_second" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```python
bandwidth_tier_gigabits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `traffic_mode`<sup>Required</sup> <a name="traffic_mode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode"></a>

```python
traffic_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNetworkGatewayAwsCloudConnection <a name="PrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection(
  cross_account_role: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole,
  gateway_subnets: IResolvable | typing.List[PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets],
  security_group_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">cross_account_role</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">gateway_subnets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}. |

---

##### `cross_account_role`<sup>Required</sup> <a name="cross_account_role" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```python
cross_account_role: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}.

---

##### `gateway_subnets`<sup>Required</sup> <a name="gateway_subnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```python
gateway_subnets: IResolvable | typing.List[PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}.

---

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole(
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}.

---

### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets(
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}.

---

### PrivateNetworkGatewayAzureCloudConnection <a name="PrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection(
  gateway_subnet: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">gateway_subnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}. |

---

##### `gateway_subnet`<sup>Required</sup> <a name="gateway_subnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```python
gateway_subnet: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}.

---

### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet(
  resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}.

---

### PrivateNetworkGatewayConfig <a name="PrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  parent: str,
  traffic_mode: str,
  aws_cloud_connection: PrivateNetworkGatewayAwsCloudConnection = None,
  azure_cloud_connection: PrivateNetworkGatewayAzureCloudConnection = None,
  bandwidth_tier_gigabits_per_second: typing.Union[int, float] = None,
  destinations: IResolvable | typing.List[PrivateNetworkGatewayDestinations] = None,
  private_dns_resolvers: IResolvable | typing.List[PrivateNetworkGatewayPrivateDnsResolvers] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode">traffic_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection">aws_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection">azure_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond">bandwidth_tier_gigabits_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers">private_dns_resolvers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}.

---

##### `traffic_mode`<sup>Required</sup> <a name="traffic_mode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode"></a>

```python
traffic_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}.

---

##### `aws_cloud_connection`<sup>Optional</sup> <a name="aws_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection"></a>

```python
aws_cloud_connection: PrivateNetworkGatewayAwsCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}.

---

##### `azure_cloud_connection`<sup>Optional</sup> <a name="azure_cloud_connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection"></a>

```python
azure_cloud_connection: PrivateNetworkGatewayAzureCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}.

---

##### `bandwidth_tier_gigabits_per_second`<sup>Optional</sup> <a name="bandwidth_tier_gigabits_per_second" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond"></a>

```python
bandwidth_tier_gigabits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations"></a>

```python
destinations: IResolvable | typing.List[PrivateNetworkGatewayDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}.

---

##### `private_dns_resolvers`<sup>Optional</sup> <a name="private_dns_resolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers"></a>

```python
private_dns_resolvers: IResolvable | typing.List[PrivateNetworkGatewayPrivateDnsResolvers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}.

---

### PrivateNetworkGatewayDestinations <a name="PrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayDestinations(
  destination_type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

### PrivateNetworkGatewayPrivateDnsResolvers <a name="PrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers(
  resolver_type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">resolver_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `resolver_type`<sup>Required</sup> <a name="resolver_type" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```python
resolver_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>

---


### PrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">put_cross_account_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">put_gateway_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cross_account_role` <a name="put_cross_account_role" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```python
def put_cross_account_role(
  role_arn: str
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}.

---

##### `put_gateway_subnets` <a name="put_gateway_subnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```python
def put_gateway_subnets(
  value: IResolvable | typing.List[PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">cross_account_role</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">gateway_subnets</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">cross_account_role_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">gateway_subnets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role`<sup>Required</sup> <a name="cross_account_role" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```python
cross_account_role: PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `gateway_subnets`<sup>Required</sup> <a name="gateway_subnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```python
gateway_subnets: PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `cross_account_role_input`<sup>Optional</sup> <a name="cross_account_role_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```python
cross_account_role_input: IResolvable | PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `gateway_subnets_input`<sup>Optional</sup> <a name="gateway_subnets_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```python
gateway_subnets_input: IResolvable | typing.List[PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateNetworkGatewayAwsCloudConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---


### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


### PrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">put_gateway_subnet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gateway_subnet` <a name="put_gateway_subnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```python
def put_gateway_subnet(
  resource_id: str
) -> None
```

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">gateway_subnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">gateway_subnet_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_subnet`<sup>Required</sup> <a name="gateway_subnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```python
gateway_subnet: PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `gateway_subnet_input`<sup>Optional</sup> <a name="gateway_subnet_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```python
gateway_subnet_input: IResolvable | PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateNetworkGatewayAzureCloudConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---


### PrivateNetworkGatewayDestinationsList <a name="PrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrivateNetworkGatewayDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PrivateNetworkGatewayDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>]

---


### PrivateNetworkGatewayDestinationsOutputReference <a name="PrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateNetworkGatewayDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations">PrivateNetworkGatewayDestinations</a>

---


### PrivateNetworkGatewayPrivateDnsResolversList <a name="PrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrivateNetworkGatewayPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PrivateNetworkGatewayPrivateDnsResolvers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>]

---


### PrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="PrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import private_network_gateway

privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">resolver_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">resolver_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolver_type_input`<sup>Optional</sup> <a name="resolver_type_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```python
resolver_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `resolver_type`<sup>Required</sup> <a name="resolver_type" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```python
resolver_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateNetworkGatewayPrivateDnsResolvers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers">PrivateNetworkGatewayPrivateDnsResolvers</a>

---



