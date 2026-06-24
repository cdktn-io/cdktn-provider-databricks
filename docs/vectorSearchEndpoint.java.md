# `vectorSearchEndpoint` Submodule <a name="`vectorSearchEndpoint` Submodule" id="@cdktn/provider-databricks.vectorSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchEndpoint <a name="VectorSearchEndpoint" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint databricks_vector_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpoint;

VectorSearchEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointType(java.lang.String)
    .name(java.lang.String)
//  .budgetPolicyId(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(VectorSearchEndpointProviderConfig)
//  .scalingInfo(VectorSearchEndpointScalingInfo)
//  .timeouts(VectorSearchEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scalingInfo">scalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | scaling_info block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}.

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.budgetPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#provider_config VectorSearchEndpoint#provider_config}

---

##### `scalingInfo`<sup>Optional</sup> <a name="scalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scalingInfo"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

scaling_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#scaling_info VectorSearchEndpoint#scaling_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#timeouts VectorSearchEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo">putScalingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetScalingInfo">resetScalingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig"></a>

```java
public void putProviderConfig(VectorSearchEndpointProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---

##### `putScalingInfo` <a name="putScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo"></a>

```java
public void putScalingInfo(VectorSearchEndpointScalingInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts"></a>

```java
public void putTimeouts(VectorSearchEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetBudgetPolicyId"></a>

```java
public void resetBudgetPolicyId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetScalingInfo` <a name="resetScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetScalingInfo"></a>

```java
public void resetScalingInfo()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpoint;

VectorSearchEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpoint;

VectorSearchEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpoint;

VectorSearchEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpoint;

VectorSearchEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VectorSearchEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VectorSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VectorSearchEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VectorSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus">endpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser">lastUpdatedUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes">numIndexes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference">VectorSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfo">scalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference">VectorSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfoInput">scalingInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp"></a>

```java
public java.lang.Number getCreationTimestamp();
```

- *Type:* java.lang.Number

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```java
public java.lang.String getEffectiveBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `endpointStatus`<sup>Required</sup> <a name="endpointStatus" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus"></a>

```java
public VectorSearchEndpointEndpointStatusList getEndpointStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a>

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp"></a>

```java
public java.lang.Number getLastUpdatedTimestamp();
```

- *Type:* java.lang.Number

---

##### `lastUpdatedUser`<sup>Required</sup> <a name="lastUpdatedUser" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser"></a>

```java
public java.lang.String getLastUpdatedUser();
```

- *Type:* java.lang.String

---

##### `numIndexes`<sup>Required</sup> <a name="numIndexes" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes"></a>

```java
public java.lang.Number getNumIndexes();
```

- *Type:* java.lang.Number

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfig"></a>

```java
public VectorSearchEndpointProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference">VectorSearchEndpointProviderConfigOutputReference</a>

---

##### `scalingInfo`<sup>Required</sup> <a name="scalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfo"></a>

```java
public VectorSearchEndpointScalingInfoOutputReference getScalingInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference">VectorSearchEndpointScalingInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts"></a>

```java
public VectorSearchEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a>

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyIdInput"></a>

```java
public java.lang.String getBudgetPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfigInput"></a>

```java
public VectorSearchEndpointProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---

##### `scalingInfoInput`<sup>Optional</sup> <a name="scalingInfoInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfoInput"></a>

```java
public VectorSearchEndpointScalingInfo getScalingInfoInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|VectorSearchEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchEndpointConfig <a name="VectorSearchEndpointConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointConfig;

VectorSearchEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointType(java.lang.String)
    .name(java.lang.String)
//  .budgetPolicyId(java.lang.String)
//  .id(java.lang.String)
//  .providerConfig(VectorSearchEndpointProviderConfig)
//  .scalingInfo(VectorSearchEndpointScalingInfo)
//  .timeouts(VectorSearchEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.scalingInfo">scalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | scaling_info block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}.

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.providerConfig"></a>

```java
public VectorSearchEndpointProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#provider_config VectorSearchEndpoint#provider_config}

---

##### `scalingInfo`<sup>Optional</sup> <a name="scalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.scalingInfo"></a>

```java
public VectorSearchEndpointScalingInfo getScalingInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

scaling_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#scaling_info VectorSearchEndpoint#scaling_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts"></a>

```java
public VectorSearchEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#timeouts VectorSearchEndpoint#timeouts}

---

### VectorSearchEndpointEndpointStatus <a name="VectorSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointEndpointStatus;

VectorSearchEndpointEndpointStatus.builder()
    .build();
```


### VectorSearchEndpointProviderConfig <a name="VectorSearchEndpointProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointProviderConfig;

VectorSearchEndpointProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#workspace_id VectorSearchEndpoint#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#workspace_id VectorSearchEndpoint#workspace_id}.

---

### VectorSearchEndpointScalingInfo <a name="VectorSearchEndpointScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointScalingInfo;

VectorSearchEndpointScalingInfo.builder()
//  .requestedTargetQps(java.lang.Number)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.requestedTargetQps">requestedTargetQps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#requested_target_qps VectorSearchEndpoint#requested_target_qps}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#state VectorSearchEndpoint#state}. |

---

##### `requestedTargetQps`<sup>Optional</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```java
public java.lang.Number getRequestedTargetQps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#requested_target_qps VectorSearchEndpoint#requested_target_qps}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#state VectorSearchEndpoint#state}.

---

### VectorSearchEndpointTimeouts <a name="VectorSearchEndpointTimeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointTimeouts;

VectorSearchEndpointTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchEndpointEndpointStatusList <a name="VectorSearchEndpointEndpointStatusList" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointEndpointStatusList;

new VectorSearchEndpointEndpointStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get"></a>

```java
public VectorSearchEndpointEndpointStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VectorSearchEndpointEndpointStatusOutputReference <a name="VectorSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointEndpointStatusOutputReference;

new VectorSearchEndpointEndpointStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```java
public VectorSearchEndpointEndpointStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a>

---


### VectorSearchEndpointProviderConfigOutputReference <a name="VectorSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointProviderConfigOutputReference;

new VectorSearchEndpointProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```java
public VectorSearchEndpointProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---


### VectorSearchEndpointScalingInfoOutputReference <a name="VectorSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointScalingInfoOutputReference;

new VectorSearchEndpointScalingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">resetRequestedTargetQps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequestedTargetQps` <a name="resetRequestedTargetQps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```java
public void resetRequestedTargetQps()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">requestedTargetQpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">requestedTargetQps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestedTargetQpsInput`<sup>Optional</sup> <a name="requestedTargetQpsInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```java
public java.lang.Number getRequestedTargetQpsInput();
```

- *Type:* java.lang.Number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `requestedTargetQps`<sup>Required</sup> <a name="requestedTargetQps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```java
public java.lang.Number getRequestedTargetQps();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```java
public VectorSearchEndpointScalingInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---


### VectorSearchEndpointTimeoutsOutputReference <a name="VectorSearchEndpointTimeoutsOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.vector_search_endpoint.VectorSearchEndpointTimeoutsOutputReference;

new VectorSearchEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VectorSearchEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---



