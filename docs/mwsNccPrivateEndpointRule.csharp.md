# `mwsNccPrivateEndpointRule` Submodule <a name="`mwsNccPrivateEndpointRule` Submodule" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNccPrivateEndpointRule <a name="MwsNccPrivateEndpointRule" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MwsNccPrivateEndpointRule(Construct Scope, string Id, MwsNccPrivateEndpointRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint">PutGcpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointService">ResetEndpointService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGcpEndpoint">ResetGcpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceNames">ResetResourceNames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGcpEndpoint` <a name="PutGcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint"></a>

```csharp
private void PutGcpEndpoint(MwsNccPrivateEndpointRuleGcpEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDomainNames"></a>

```csharp
private void ResetDomainNames()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEndpointService` <a name="ResetEndpointService" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointService"></a>

```csharp
private void ResetEndpointService()
```

##### `ResetGcpEndpoint` <a name="ResetGcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGcpEndpoint"></a>

```csharp
private void ResetGcpEndpoint()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceNames` <a name="ResetResourceNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceNames"></a>

```csharp
private void ResetResourceNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MwsNccPrivateEndpointRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MwsNccPrivateEndpointRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MwsNccPrivateEndpointRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MwsNccPrivateEndpointRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MwsNccPrivateEndpointRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MwsNccPrivateEndpointRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsNccPrivateEndpointRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsNccPrivateEndpointRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated">Deactivated</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt">DeactivatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpoint">GcpEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference">MwsNccPrivateEndpointRuleGcpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNamesInput">DomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointServiceInput">EndpointServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpointInput">GcpEndpointInput</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNamesInput">ResourceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointService">EndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated"></a>

```csharp
public IResolvable Deactivated { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt"></a>

```csharp
public double DeactivatedAt { get; }
```

- *Type:* double

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `GcpEndpoint`<sup>Required</sup> <a name="GcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpoint"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpointOutputReference GcpEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference">MwsNccPrivateEndpointRuleGcpEndpointOutputReference</a>

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; }
```

- *Type:* double

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNamesInput"></a>

```csharp
public string[] DomainNamesInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointServiceInput`<sup>Optional</sup> <a name="EndpointServiceInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointServiceInput"></a>

```csharp
public string EndpointServiceInput { get; }
```

- *Type:* string

---

##### `GcpEndpointInput`<sup>Optional</sup> <a name="GcpEndpointInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpointInput"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpoint GcpEndpointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput"></a>

```csharp
public string NetworkConnectivityConfigIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceNamesInput`<sup>Optional</sup> <a name="ResourceNamesInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNamesInput"></a>

```csharp
public string[] ResourceNamesInput { get; }
```

- *Type:* string[]

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointService`<sup>Required</sup> <a name="EndpointService" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointService"></a>

```csharp
public string EndpointService { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNccPrivateEndpointRuleConfig <a name="MwsNccPrivateEndpointRuleConfig" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MwsNccPrivateEndpointRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NetworkConnectivityConfigId,
    string[] DomainNames = null,
    bool|IResolvable Enabled = null,
    string EndpointService = null,
    MwsNccPrivateEndpointRuleGcpEndpoint GcpEndpoint = null,
    string GroupId = null,
    string Id = null,
    string ResourceId = null,
    string[] ResourceNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.domainNames">DomainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointService">EndpointService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.gcpEndpoint">GcpEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | gcp_endpoint block. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}.

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.domainNames"></a>

```csharp
public string[] DomainNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}.

---

##### `EndpointService`<sup>Optional</sup> <a name="EndpointService" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointService"></a>

```csharp
public string EndpointService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}.

---

##### `GcpEndpoint`<sup>Optional</sup> <a name="GcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.gcpEndpoint"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpoint GcpEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

gcp_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#gcp_endpoint MwsNccPrivateEndpointRule#gcp_endpoint}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}.

---

##### `ResourceNames`<sup>Optional</sup> <a name="ResourceNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}.

---

### MwsNccPrivateEndpointRuleGcpEndpoint <a name="MwsNccPrivateEndpointRuleGcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MwsNccPrivateEndpointRuleGcpEndpoint {
    bool|IResolvable AllVpcScServices = null,
    MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints GoogleApiEndpoints = null,
    string ServiceAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.allVpcScServices">AllVpcScServices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#all_vpc_sc_services MwsNccPrivateEndpointRule#all_vpc_sc_services}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.googleApiEndpoints">GoogleApiEndpoints</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints</a></code> | google_api_endpoints block. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}. |

---

##### `AllVpcScServices`<sup>Optional</sup> <a name="AllVpcScServices" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.allVpcScServices"></a>

```csharp
public bool|IResolvable AllVpcScServices { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#all_vpc_sc_services MwsNccPrivateEndpointRule#all_vpc_sc_services}.

---

##### `GoogleApiEndpoints`<sup>Optional</sup> <a name="GoogleApiEndpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.googleApiEndpoints"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints GoogleApiEndpoints { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints</a>

google_api_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#google_api_endpoints MwsNccPrivateEndpointRule#google_api_endpoints}

---

##### `ServiceAttachment`<sup>Optional</sup> <a name="ServiceAttachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}.

---

### MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints <a name="MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints {
    string[] Endpoints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints.property.endpoints">Endpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#endpoints MwsNccPrivateEndpointRule#endpoints}. |

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints.property.endpoints"></a>

```csharp
public string[] Endpoints { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/mws_ncc_private_endpoint_rule#endpoints MwsNccPrivateEndpointRule#endpoints}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference <a name="MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.resetEndpoints">ResetEndpoints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.endpointsInput">EndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.endpoints">Endpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.endpointsInput"></a>

```csharp
public string[] EndpointsInput { get; }
```

- *Type:* string[]

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.endpoints"></a>

```csharp
public string[] Endpoints { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference.property.internalValue"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints</a>

---


### MwsNccPrivateEndpointRuleGcpEndpointOutputReference <a name="MwsNccPrivateEndpointRuleGcpEndpointOutputReference" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MwsNccPrivateEndpointRuleGcpEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.putGoogleApiEndpoints">PutGoogleApiEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetAllVpcScServices">ResetAllVpcScServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetGoogleApiEndpoints">ResetGoogleApiEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetServiceAttachment">ResetServiceAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoogleApiEndpoints` <a name="PutGoogleApiEndpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.putGoogleApiEndpoints"></a>

```csharp
private void PutGoogleApiEndpoints(MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.putGoogleApiEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints</a>

---

##### `ResetAllVpcScServices` <a name="ResetAllVpcScServices" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetAllVpcScServices"></a>

```csharp
private void ResetAllVpcScServices()
```

##### `ResetGoogleApiEndpoints` <a name="ResetGoogleApiEndpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetGoogleApiEndpoints"></a>

```csharp
private void ResetGoogleApiEndpoints()
```

##### `ResetServiceAttachment` <a name="ResetServiceAttachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetServiceAttachment"></a>

```csharp
private void ResetServiceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.googleApiEndpoints">GoogleApiEndpoints</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUri">PscEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.allVpcScServicesInput">AllVpcScServicesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.googleApiEndpointsInput">GoogleApiEndpointsInput</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.allVpcScServices">AllVpcScServices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleApiEndpoints`<sup>Required</sup> <a name="GoogleApiEndpoints" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.googleApiEndpoints"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference GoogleApiEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpointsOutputReference</a>

---

##### `PscEndpointUri`<sup>Required</sup> <a name="PscEndpointUri" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUri"></a>

```csharp
public string PscEndpointUri { get; }
```

- *Type:* string

---

##### `AllVpcScServicesInput`<sup>Optional</sup> <a name="AllVpcScServicesInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.allVpcScServicesInput"></a>

```csharp
public bool|IResolvable AllVpcScServicesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GoogleApiEndpointsInput`<sup>Optional</sup> <a name="GoogleApiEndpointsInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.googleApiEndpointsInput"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints GoogleApiEndpointsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints">MwsNccPrivateEndpointRuleGcpEndpointGoogleApiEndpoints</a>

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachmentInput"></a>

```csharp
public string ServiceAttachmentInput { get; }
```

- *Type:* string

---

##### `AllVpcScServices`<sup>Required</sup> <a name="AllVpcScServices" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.allVpcScServices"></a>

```csharp
public bool|IResolvable AllVpcScServices { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.internalValue"></a>

```csharp
public MwsNccPrivateEndpointRuleGcpEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---



