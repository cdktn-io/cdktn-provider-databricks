# `endpoint` Submodule <a name="`endpoint` Submodule" id="@cdktn/provider-databricks.endpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Endpoint <a name="Endpoint" id="@cdktn/provider-databricks.endpoint.Endpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint databricks_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.Endpoint;

Endpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .parent(java.lang.String)
    .region(java.lang.String)
//  .awsVpcEndpointInfo(EndpointAwsVpcEndpointInfo)
//  .azurePrivateEndpointInfo(EndpointAzurePrivateEndpointInfo)
//  .gcpPscEndpointInfo(EndpointGcpPscEndpointInfo)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#display_name Endpoint#display_name}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#parent Endpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#region Endpoint#region}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.awsVpcEndpointInfo">awsVpcEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#aws_vpc_endpoint_info Endpoint#aws_vpc_endpoint_info}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.azurePrivateEndpointInfo">azurePrivateEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#azure_private_endpoint_info Endpoint#azure_private_endpoint_info}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.gcpPscEndpointInfo">gcpPscEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#gcp_psc_endpoint_info Endpoint#gcp_psc_endpoint_info}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#display_name Endpoint#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#parent Endpoint#parent}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#region Endpoint#region}.

---

##### `awsVpcEndpointInfo`<sup>Optional</sup> <a name="awsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.awsVpcEndpointInfo"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#aws_vpc_endpoint_info Endpoint#aws_vpc_endpoint_info}.

---

##### `azurePrivateEndpointInfo`<sup>Optional</sup> <a name="azurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.azurePrivateEndpointInfo"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#azure_private_endpoint_info Endpoint#azure_private_endpoint_info}.

---

##### `gcpPscEndpointInfo`<sup>Optional</sup> <a name="gcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.Initializer.parameter.gcpPscEndpointInfo"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#gcp_psc_endpoint_info Endpoint#gcp_psc_endpoint_info}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.putAwsVpcEndpointInfo">putAwsVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.putAzurePrivateEndpointInfo">putAzurePrivateEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.putGcpPscEndpointInfo">putGcpPscEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetAwsVpcEndpointInfo">resetAwsVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetAzurePrivateEndpointInfo">resetAzurePrivateEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.resetGcpPscEndpointInfo">resetGcpPscEndpointInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.endpoint.Endpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.endpoint.Endpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.endpoint.Endpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.endpoint.Endpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.endpoint.Endpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.endpoint.Endpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.endpoint.Endpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.endpoint.Endpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.endpoint.Endpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.endpoint.Endpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.endpoint.Endpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.endpoint.Endpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.endpoint.Endpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.endpoint.Endpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.endpoint.Endpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.endpoint.Endpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.endpoint.Endpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.endpoint.Endpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.Endpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.endpoint.Endpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.endpoint.Endpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.endpoint.Endpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.endpoint.Endpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.endpoint.Endpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.endpoint.Endpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.endpoint.Endpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsVpcEndpointInfo` <a name="putAwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.putAwsVpcEndpointInfo"></a>

```java
public void putAwsVpcEndpointInfo(EndpointAwsVpcEndpointInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.endpoint.Endpoint.putAwsVpcEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

---

##### `putAzurePrivateEndpointInfo` <a name="putAzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.putAzurePrivateEndpointInfo"></a>

```java
public void putAzurePrivateEndpointInfo(EndpointAzurePrivateEndpointInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.endpoint.Endpoint.putAzurePrivateEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

---

##### `putGcpPscEndpointInfo` <a name="putGcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.putGcpPscEndpointInfo"></a>

```java
public void putGcpPscEndpointInfo(EndpointGcpPscEndpointInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.endpoint.Endpoint.putGcpPscEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

---

##### `resetAwsVpcEndpointInfo` <a name="resetAwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.resetAwsVpcEndpointInfo"></a>

```java
public void resetAwsVpcEndpointInfo()
```

##### `resetAzurePrivateEndpointInfo` <a name="resetAzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.resetAzurePrivateEndpointInfo"></a>

```java
public void resetAzurePrivateEndpointInfo()
```

##### `resetGcpPscEndpointInfo` <a name="resetGcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.resetGcpPscEndpointInfo"></a>

```java
public void resetGcpPscEndpointInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Endpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.endpoint.Endpoint.isConstruct"></a>

```java
import io.cdktn.providers.databricks.endpoint.Endpoint;

Endpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.endpoint.Endpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.endpoint.Endpoint;

Endpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.endpoint.Endpoint;

Endpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.endpoint.Endpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.endpoint.Endpoint;

Endpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Endpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Endpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Endpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Endpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.endpoint.Endpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Endpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfo">awsVpcEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference">EndpointAwsVpcEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfo">azurePrivateEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference">EndpointAzurePrivateEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfo">gcpPscEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference">EndpointGcpPscEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.useCase">useCase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfoInput">awsVpcEndpointInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfoInput">azurePrivateEndpointInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfoInput">gcpPscEndpointInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.endpoint.Endpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.endpoint.Endpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.endpoint.Endpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.endpoint.Endpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.endpoint.Endpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.endpoint.Endpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.endpoint.Endpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.endpoint.Endpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.endpoint.Endpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.endpoint.Endpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.endpoint.Endpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.endpoint.Endpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.endpoint.Endpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.endpoint.Endpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.endpoint.Endpoint.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `awsVpcEndpointInfo`<sup>Required</sup> <a name="awsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfo"></a>

```java
public EndpointAwsVpcEndpointInfoOutputReference getAwsVpcEndpointInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference">EndpointAwsVpcEndpointInfoOutputReference</a>

---

##### `azurePrivateEndpointInfo`<sup>Required</sup> <a name="azurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfo"></a>

```java
public EndpointAzurePrivateEndpointInfoOutputReference getAzurePrivateEndpointInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference">EndpointAzurePrivateEndpointInfoOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.endpoint.Endpoint.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-databricks.endpoint.Endpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `gcpPscEndpointInfo`<sup>Required</sup> <a name="gcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfo"></a>

```java
public EndpointGcpPscEndpointInfoOutputReference getGcpPscEndpointInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference">EndpointGcpPscEndpointInfoOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.endpoint.Endpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.endpoint.Endpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktn/provider-databricks.endpoint.Endpoint.property.useCase"></a>

```java
public java.lang.String getUseCase();
```

- *Type:* java.lang.String

---

##### `awsVpcEndpointInfoInput`<sup>Optional</sup> <a name="awsVpcEndpointInfoInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.awsVpcEndpointInfoInput"></a>

```java
public IResolvable|EndpointAwsVpcEndpointInfo getAwsVpcEndpointInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

---

##### `azurePrivateEndpointInfoInput`<sup>Optional</sup> <a name="azurePrivateEndpointInfoInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.azurePrivateEndpointInfoInput"></a>

```java
public IResolvable|EndpointAzurePrivateEndpointInfo getAzurePrivateEndpointInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gcpPscEndpointInfoInput`<sup>Optional</sup> <a name="gcpPscEndpointInfoInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.gcpPscEndpointInfoInput"></a>

```java
public IResolvable|EndpointGcpPscEndpointInfo getGcpPscEndpointInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-databricks.endpoint.Endpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.endpoint.Endpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.endpoint.Endpoint.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.endpoint.Endpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.Endpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.endpoint.Endpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointAwsVpcEndpointInfo <a name="EndpointAwsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.EndpointAwsVpcEndpointInfo;

EndpointAwsVpcEndpointInfo.builder()
    .awsVpcEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo.property.awsVpcEndpointId">awsVpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#aws_vpc_endpoint_id Endpoint#aws_vpc_endpoint_id}. |

---

##### `awsVpcEndpointId`<sup>Required</sup> <a name="awsVpcEndpointId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo.property.awsVpcEndpointId"></a>

```java
public java.lang.String getAwsVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#aws_vpc_endpoint_id Endpoint#aws_vpc_endpoint_id}.

---

### EndpointAzurePrivateEndpointInfo <a name="EndpointAzurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.EndpointAzurePrivateEndpointInfo;

EndpointAzurePrivateEndpointInfo.builder()
    .privateEndpointName(java.lang.String)
    .privateEndpointResourceGuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointName">privateEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#private_endpoint_name Endpoint#private_endpoint_name}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointResourceGuid">privateEndpointResourceGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#private_endpoint_resource_guid Endpoint#private_endpoint_resource_guid}. |

---

##### `privateEndpointName`<sup>Required</sup> <a name="privateEndpointName" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointName"></a>

```java
public java.lang.String getPrivateEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#private_endpoint_name Endpoint#private_endpoint_name}.

---

##### `privateEndpointResourceGuid`<sup>Required</sup> <a name="privateEndpointResourceGuid" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo.property.privateEndpointResourceGuid"></a>

```java
public java.lang.String getPrivateEndpointResourceGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#private_endpoint_resource_guid Endpoint#private_endpoint_resource_guid}.

---

### EndpointConfig <a name="EndpointConfig" id="@cdktn/provider-databricks.endpoint.EndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.EndpointConfig;

EndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .parent(java.lang.String)
    .region(java.lang.String)
//  .awsVpcEndpointInfo(EndpointAwsVpcEndpointInfo)
//  .azurePrivateEndpointInfo(EndpointAzurePrivateEndpointInfo)
//  .gcpPscEndpointInfo(EndpointGcpPscEndpointInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#display_name Endpoint#display_name}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#parent Endpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#region Endpoint#region}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.awsVpcEndpointInfo">awsVpcEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#aws_vpc_endpoint_info Endpoint#aws_vpc_endpoint_info}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.azurePrivateEndpointInfo">azurePrivateEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#azure_private_endpoint_info Endpoint#azure_private_endpoint_info}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointConfig.property.gcpPscEndpointInfo">gcpPscEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#gcp_psc_endpoint_info Endpoint#gcp_psc_endpoint_info}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#display_name Endpoint#display_name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#parent Endpoint#parent}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#region Endpoint#region}.

---

##### `awsVpcEndpointInfo`<sup>Optional</sup> <a name="awsVpcEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.awsVpcEndpointInfo"></a>

```java
public EndpointAwsVpcEndpointInfo getAwsVpcEndpointInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#aws_vpc_endpoint_info Endpoint#aws_vpc_endpoint_info}.

---

##### `azurePrivateEndpointInfo`<sup>Optional</sup> <a name="azurePrivateEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.azurePrivateEndpointInfo"></a>

```java
public EndpointAzurePrivateEndpointInfo getAzurePrivateEndpointInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#azure_private_endpoint_info Endpoint#azure_private_endpoint_info}.

---

##### `gcpPscEndpointInfo`<sup>Optional</sup> <a name="gcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointConfig.property.gcpPscEndpointInfo"></a>

```java
public EndpointGcpPscEndpointInfo getGcpPscEndpointInfo();
```

- *Type:* <a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#gcp_psc_endpoint_info Endpoint#gcp_psc_endpoint_info}.

---

### EndpointGcpPscEndpointInfo <a name="EndpointGcpPscEndpointInfo" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.EndpointGcpPscEndpointInfo;

EndpointGcpPscEndpointInfo.builder()
    .endpointRegion(java.lang.String)
    .projectId(java.lang.String)
    .pscEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.endpointRegion">endpointRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#endpoint_region Endpoint#endpoint_region}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#project_id Endpoint#project_id}. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.pscEndpoint">pscEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#psc_endpoint Endpoint#psc_endpoint}. |

---

##### `endpointRegion`<sup>Required</sup> <a name="endpointRegion" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.endpointRegion"></a>

```java
public java.lang.String getEndpointRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#endpoint_region Endpoint#endpoint_region}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#project_id Endpoint#project_id}.

---

##### `pscEndpoint`<sup>Required</sup> <a name="pscEndpoint" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo.property.pscEndpoint"></a>

```java
public java.lang.String getPscEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/endpoint#psc_endpoint Endpoint#psc_endpoint}.

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointAwsVpcEndpointInfoOutputReference <a name="EndpointAwsVpcEndpointInfoOutputReference" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference;

new EndpointAwsVpcEndpointInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsEndpointServiceId">awsEndpointServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointIdInput">awsVpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointId">awsVpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsEndpointServiceId`<sup>Required</sup> <a name="awsEndpointServiceId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsEndpointServiceId"></a>

```java
public java.lang.String getAwsEndpointServiceId();
```

- *Type:* java.lang.String

---

##### `awsVpcEndpointIdInput`<sup>Optional</sup> <a name="awsVpcEndpointIdInput" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointIdInput"></a>

```java
public java.lang.String getAwsVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `awsVpcEndpointId`<sup>Required</sup> <a name="awsVpcEndpointId" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointId"></a>

```java
public java.lang.String getAwsVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|EndpointAwsVpcEndpointInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAwsVpcEndpointInfo">EndpointAwsVpcEndpointInfo</a>

---


### EndpointAzurePrivateEndpointInfoOutputReference <a name="EndpointAzurePrivateEndpointInfoOutputReference" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference;

new EndpointAzurePrivateEndpointInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId">privateEndpointResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId">privateLinkServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput">privateEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput">privateEndpointResourceGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointName">privateEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid">privateEndpointResourceGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateEndpointResourceId`<sup>Required</sup> <a name="privateEndpointResourceId" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId"></a>

```java
public java.lang.String getPrivateEndpointResourceId();
```

- *Type:* java.lang.String

---

##### `privateLinkServiceId`<sup>Required</sup> <a name="privateLinkServiceId" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId"></a>

```java
public java.lang.String getPrivateLinkServiceId();
```

- *Type:* java.lang.String

---

##### `privateEndpointNameInput`<sup>Optional</sup> <a name="privateEndpointNameInput" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput"></a>

```java
public java.lang.String getPrivateEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointResourceGuidInput`<sup>Optional</sup> <a name="privateEndpointResourceGuidInput" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput"></a>

```java
public java.lang.String getPrivateEndpointResourceGuidInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointName`<sup>Required</sup> <a name="privateEndpointName" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointName"></a>

```java
public java.lang.String getPrivateEndpointName();
```

- *Type:* java.lang.String

---

##### `privateEndpointResourceGuid`<sup>Required</sup> <a name="privateEndpointResourceGuid" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid"></a>

```java
public java.lang.String getPrivateEndpointResourceGuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|EndpointAzurePrivateEndpointInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointAzurePrivateEndpointInfo">EndpointAzurePrivateEndpointInfo</a>

---


### EndpointGcpPscEndpointInfoOutputReference <a name="EndpointGcpPscEndpointInfoOutputReference" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference;

new EndpointGcpPscEndpointInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.serviceAttachmentId">serviceAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegionInput">endpointRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpointInput">pscEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegion">endpointRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpoint">pscEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentId`<sup>Required</sup> <a name="serviceAttachmentId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.serviceAttachmentId"></a>

```java
public java.lang.String getServiceAttachmentId();
```

- *Type:* java.lang.String

---

##### `endpointRegionInput`<sup>Optional</sup> <a name="endpointRegionInput" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegionInput"></a>

```java
public java.lang.String getEndpointRegionInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `pscEndpointInput`<sup>Optional</sup> <a name="pscEndpointInput" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpointInput"></a>

```java
public java.lang.String getPscEndpointInput();
```

- *Type:* java.lang.String

---

##### `endpointRegion`<sup>Required</sup> <a name="endpointRegion" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.endpointRegion"></a>

```java
public java.lang.String getEndpointRegion();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscEndpoint`<sup>Required</sup> <a name="pscEndpoint" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.pscEndpoint"></a>

```java
public java.lang.String getPscEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|EndpointGcpPscEndpointInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.endpoint.EndpointGcpPscEndpointInfo">EndpointGcpPscEndpointInfo</a>

---



