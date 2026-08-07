# `mwsNccPrivateEndpointRule` Submodule <a name="`mwsNccPrivateEndpointRule` Submodule" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNccPrivateEndpointRule <a name="MwsNccPrivateEndpointRule" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network_connectivity_config_id: str,
  domain_names: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  endpoint_service: str = None,
  gcp_endpoint: MwsNccPrivateEndpointRuleGcpEndpoint = None,
  group_id: str = None,
  id: str = None,
  resource_id: str = None,
  resource_names: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.endpointService">endpoint_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.gcpEndpoint">gcp_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | gcp_endpoint block. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `network_connectivity_config_id`<sup>Required</sup> <a name="network_connectivity_config_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.networkConnectivityConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}.

---

##### `domain_names`<sup>Optional</sup> <a name="domain_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.domainNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}.

---

##### `endpoint_service`<sup>Optional</sup> <a name="endpoint_service" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.endpointService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}.

---

##### `gcp_endpoint`<sup>Optional</sup> <a name="gcp_endpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.gcpEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

gcp_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#gcp_endpoint MwsNccPrivateEndpointRule#gcp_endpoint}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}.

---

##### `resource_names`<sup>Optional</sup> <a name="resource_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.resourceNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint">put_gcp_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDomainNames">reset_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointService">reset_endpoint_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGcpEndpoint">reset_gcp_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceNames">reset_resource_names</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gcp_endpoint` <a name="put_gcp_endpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint"></a>

```python
def put_gcp_endpoint(
  service_attachment: str = None
) -> None
```

###### `service_attachment`<sup>Optional</sup> <a name="service_attachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint.parameter.serviceAttachment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}.

---

##### `reset_domain_names` <a name="reset_domain_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDomainNames"></a>

```python
def reset_domain_names() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_endpoint_service` <a name="reset_endpoint_service" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointService"></a>

```python
def reset_endpoint_service() -> None
```

##### `reset_gcp_endpoint` <a name="reset_gcp_endpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGcpEndpoint"></a>

```python
def reset_gcp_endpoint() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_names` <a name="reset_resource_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceNames"></a>

```python
def reset_resource_names() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MwsNccPrivateEndpointRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MwsNccPrivateEndpointRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MwsNccPrivateEndpointRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MwsNccPrivateEndpointRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState">connection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated">deactivated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt">deactivated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpoint">gcp_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference">MwsNccPrivateEndpointRuleGcpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime">updated_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNamesInput">domain_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointServiceInput">endpoint_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpointInput">gcp_endpoint_input</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput">network_connectivity_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNamesInput">resource_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointService">endpoint_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `connection_state`<sup>Required</sup> <a name="connection_state" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated"></a>

```python
deactivated: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `deactivated_at`<sup>Required</sup> <a name="deactivated_at" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt"></a>

```python
deactivated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `gcp_endpoint`<sup>Required</sup> <a name="gcp_endpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpoint"></a>

```python
gcp_endpoint: MwsNccPrivateEndpointRuleGcpEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference">MwsNccPrivateEndpointRuleGcpEndpointOutputReference</a>

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime"></a>

```python
updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `domain_names_input`<sup>Optional</sup> <a name="domain_names_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNamesInput"></a>

```python
domain_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_service_input`<sup>Optional</sup> <a name="endpoint_service_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointServiceInput"></a>

```python
endpoint_service_input: str
```

- *Type:* str

---

##### `gcp_endpoint_input`<sup>Optional</sup> <a name="gcp_endpoint_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpointInput"></a>

```python
gcp_endpoint_input: MwsNccPrivateEndpointRuleGcpEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_connectivity_config_id_input`<sup>Optional</sup> <a name="network_connectivity_config_id_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput"></a>

```python
network_connectivity_config_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_names_input`<sup>Optional</sup> <a name="resource_names_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNamesInput"></a>

```python
resource_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_service`<sup>Required</sup> <a name="endpoint_service" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointService"></a>

```python
endpoint_service: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_connectivity_config_id`<sup>Required</sup> <a name="network_connectivity_config_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId"></a>

```python
network_connectivity_config_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNames"></a>

```python
resource_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNccPrivateEndpointRuleConfig <a name="MwsNccPrivateEndpointRuleConfig" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.Initializer"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network_connectivity_config_id: str,
  domain_names: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  endpoint_service: str = None,
  gcp_endpoint: MwsNccPrivateEndpointRuleGcpEndpoint = None,
  group_id: str = None,
  id: str = None,
  resource_id: str = None,
  resource_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId">network_connectivity_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointService">endpoint_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.gcpEndpoint">gcp_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | gcp_endpoint block. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `network_connectivity_config_id`<sup>Required</sup> <a name="network_connectivity_config_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId"></a>

```python
network_connectivity_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}.

---

##### `domain_names`<sup>Optional</sup> <a name="domain_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}.

---

##### `endpoint_service`<sup>Optional</sup> <a name="endpoint_service" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointService"></a>

```python
endpoint_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}.

---

##### `gcp_endpoint`<sup>Optional</sup> <a name="gcp_endpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.gcpEndpoint"></a>

```python
gcp_endpoint: MwsNccPrivateEndpointRuleGcpEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

gcp_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#gcp_endpoint MwsNccPrivateEndpointRule#gcp_endpoint}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}.

---

##### `resource_names`<sup>Optional</sup> <a name="resource_names" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceNames"></a>

```python
resource_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}.

---

### MwsNccPrivateEndpointRuleGcpEndpoint <a name="MwsNccPrivateEndpointRuleGcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint(
  service_attachment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}. |

---

##### `service_attachment`<sup>Optional</sup> <a name="service_attachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNccPrivateEndpointRuleGcpEndpointOutputReference <a name="MwsNccPrivateEndpointRuleGcpEndpointOutputReference" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import mws_ncc_private_endpoint_rule

mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetServiceAttachment">reset_service_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_attachment` <a name="reset_service_attachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetServiceAttachment"></a>

```python
def reset_service_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUri">psc_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachmentInput">service_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `psc_endpoint_uri`<sup>Required</sup> <a name="psc_endpoint_uri" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUri"></a>

```python
psc_endpoint_uri: str
```

- *Type:* str

---

##### `service_attachment_input`<sup>Optional</sup> <a name="service_attachment_input" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachmentInput"></a>

```python
service_attachment_input: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.internalValue"></a>

```python
internal_value: MwsNccPrivateEndpointRuleGcpEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---



